p5.disableFriendlyErrors = true;

// Our first QuadTree.
let qt;

let pointCount = 0;

function setup(){
    createCanvas(512,512);
    background(100,100,100);

    // Setup the root quadtree (over whole area).
    let ra = new Quad(width/2, height/2,
                     width/2, height/2);

    qt = new QTree(ra);

    rectMode(CENTER);
    noFill();
    stroke(255);

  addPoints();
}

let thePoints = [];

function mousePressed(){
    addPoints();
}

function addPoints(){
  let amount = 32;
    for (let i = 0; i < amount; i++){
        let x = randomGaussian(mouseX, width/16);
        let y = randomGaussian(mouseY, height/16);
        let np = new Point(x,y);
        np.colour = color(Math.random()*255,
                           Math.random()*255,
                           Math.random()*255);
        thePoints.push(np);
        qt.insert(thePoints[i]);
    }
        pointCount+=amount;
}

function mouseMoved(){
    //let np = new Point(mouseX, mouseY);
    //qt.insert(np);
}

function draw(){

    background(100,100,100);

    for (let ps of thePoints){

        // For each point, I want to
        // call checkBump only for
        // the points that are in
        // a certain range of it.
        let cps = [];
        let range = new Quad(ps.x, ps.y,
                            12,12);
        qt.query(range, cps);
        for (let cp of cps){
            if (ps != cp && ps.checkBump(cp)){
                let temp_p = createVector(cp.v.x, cp.v.y);
                cp.v.x = ps.v.x;
                cp.v.y = ps.v.y;
                ps.v.x = temp_p.x;
                ps.v.y = temp_p.y;

            }
        }
        ps.update();
        qt.insert(ps);
    }

    qt.render();
    dangerZone();

    qt.reset();

  fill(255);
  text("tap to add more particles", 42,42);
  text(pointCount + " particles", mouseX-52,mouseY+48);

   text(Math.floor(frameRate()) + " FPS", mouseX-52,mouseY-38);
  noFill();
}

let dzX = 100;
let dzY = dzX * 0.618;

function dangerZone(){
    stroke(0,255,0);
    strokeWeight(3);
    rect(mouseX, mouseY, dzX, dzY);

    stroke(0);
    strokeWeight(3);
    let ps = [];
    qt.query(new Quad(mouseX, mouseY,
                      dzX/2, dzY/2), ps);
    for (let p of ps){
       line(mouseX, mouseY, p.x, p.y); ellipse(p.x,p.y,p.r);
        //point(p.x, p.y);
    }
}

//**************



class Quad{
    constructor(_x, _y, _rX, _rY){
        this.x = _x;
        this.y = _y;
        this.rX = _rX;
        this.rY = _rY;

        this.l = this.x - this.rX;
        this.r = this.x + this.rX;
        this.t = this.y - this.rY;
        this.b = this.y + this.rY;
    }

    // NB the 'range' is a quad object.
    intersects (_range){
        if (_range.l > this.r ||
           _range.r < this.l){
            return false;
        } else if (_range.t > this.b ||
                  _range.b < this.t ){
            return false;
        }
        return true;
    }

    contains(_p){
        if (_p.x <= this.l ||
           _p.x > this.r ||
           _p.y <= this.t ||
           _p.y > this.b){
            return false;
        } else return true;
    }
}

class QTree{
    constructor(_boundary){
        this.boundary = _boundary;
        this.capacity = 3;
        this.points = [];
        this.divided = false;

        this.colour = color(Math.random()*255,
                           Math.random()*255,
                           Math.random()*255);
    }

    // NB the 'range' is a quad object.
    // 'found' is an (empty) array of points.
    query(_range, _found){
       if (!this.boundary.intersects(_range)) {
           return;
       }
        else {
            for (let p of this.points){
                if (_range.contains(p)){
                    _found.push(p);
                }
            }

            if (this.divided){
                this.qNE.query(_range, _found);
                this.qNW.query(_range, _found);
                this.qSE.query(_range, _found);
                this.qSW.query(_range, _found);
            }
        }
    }

    render(){

        strokeWeight(1);
        stroke(255);
        rect(this.boundary.x,
            this.boundary.y,
            this.boundary.rX*2,
            this.boundary.rY*2);

//        strokeWeight(8);
//        stroke(this.color);
        for (let p of this.points){
            //point(p.x, p.y);
            p.render();
        }

        if (this.divided){
            this.qNE.render();
            this.qSE.render();
            this.qNW.render();
            this.qSW.render();
        }
    }

//    physics(){
//        for (let pp of this.points){
//            pp.update();
//        }
//
//        if (this.divided){
//            this.qNE.physics();
//            this.qSE.physics();
//            this.qNW.physics();
//            this.qSW.physics();
//        }
//
//    }

    subdivide(){
        let nw = new Quad(
            this.boundary.x - this.boundary.rX/2,
            this.boundary.y - this.boundary.rY/2,
            this.boundary.rX/2,
            this.boundary.rY/2);
        let ne = new Quad(
            this.boundary.x + this.boundary.rX/2,
            this.boundary.y - this.boundary.rY/2,
            this.boundary.rX/2,
            this.boundary.rY/2);
        let sw = new Quad(
            this.boundary.x - this.boundary.rX/2,
            this.boundary.y + this.boundary.rY/2,
            this.boundary.rX/2,
            this.boundary.rY/2);
        let se = new Quad(
            this.boundary.x + this.boundary.rX/2,
            this.boundary.y + this.boundary.rY/2,
            this.boundary.rX/2,
            this.boundary.rY/2);

        this.qNW = new QTree(nw);
        this.qNE = new QTree(ne);
        this.qSW = new QTree(sw);
        this.qSE = new QTree(se);

        this.divided = true;

    }

    reset(){
        this.points = [];
        this.qNE = null;
        this.qNW = null;
        this.qSE = null;
        this.qSW = null;
        this.divided = false;
    }

    insert(_point){

        if (!this.boundary.contains(_point)){
            return;
        }

        if (this.points.length < this.capacity){
            this.points.push(_point);
            //_point.colour = this.colour;
        } else if (!this.divided){
            this.subdivide();
        }

            if (this.divided){
                this.qNE.insert(_point);
                this.qNW.insert(_point);
                this.qSE.insert(_point);
                this.qSW.insert(_point);
            }

    }
}

class Point{
    constructor(_x, _y){
        this.x = _x;
        this.y = _y;

        this.v = createVector(Math.random()*4-2,
                              Math.random()*4-2);
        this.a = createVector(0,0);

        // Radius of each point.
        this.r = 12;

        this.colour = color(0,0,200);
    }

    render(){
        strokeWeight(this.r*1.3);
        stroke(this.colour);
        point(this.x, this.y);
    }

    update(){
        this.v.add(this.a);
        this.x += this.v.x;
        this.y += this.v.y;

        this.a.mult(0);

        // Screen-wrap.
        if (this.x < 0) this.x = width;
        if (this.x > width) this.x = 0;
        if (this.y < 0) this.y = height;
        if (this.y > height) this.y = 0;
    }

    checkBump(_point){
        if (_point.x - _point.r >
            this.x + this.r ||
           _point.x + _point.r <
           this.x - this.r)
            return false;
        else if (_point.y - _point.r >
            this.y + this.r ||
           _point.y + _point.r <
           this.y - this.r)
            return false;

        let vChord = createVector();
        let _p = createVector(_point.x, _point.y);
        let _thisp = createVector(this.x, this.y);

        vChord = p5.Vector.sub(_p, _thisp);
        vChord.normalize();
        _thisp.add(vChord.mult(-1));
        //_p.add(-vChord);

        this.x = _thisp.x;
        this.y = _thisp.y;

        return true;
    }
}
