
# Implementation of classic arcade game Pong

import simplegui
import random

# initialize globals - pos and vel encode vertical info for paddles
WIDTH = 600
HEIGHT = 400
BALL_RADIUS = 20
PAD_WIDTH = 8
PAD_HEIGHT = 80
HALF_PAD_WIDTH = PAD_WIDTH / 2
HALF_PAD_HEIGHT = PAD_HEIGHT / 2
LEFT = False
RIGHT = True
score1 = 0
score2 = 0

ball_initial_pos = [WIDTH/2, HEIGHT/2]
ball_pos = list(ball_initial_pos)
ball_initial_vel_right = [5,-5]
ball_initial_vel_left = [-5, -5]
ball_vel = list(random.choice([ball_initial_vel_left, ball_initial_vel_right]))

ball_initial_acceleration = [0,0]
ball_acceleration = list(ball_initial_acceleration)

paddle1_initial_pos = [WIDTH - (HALF_PAD_WIDTH - 2), HEIGHT/2]
paddle2_initial_pos = [HALF_PAD_WIDTH - 2, HEIGHT/2]

paddle1_pos = list(paddle1_initial_pos)
paddle2_pos = list(paddle2_initial_pos)

paddle1_initial_vel = [0,0]
paddle2_initial_vel = [0,0]

paddle1_vel = list(paddle1_initial_vel)
paddle2_vel = list(paddle2_initial_vel)

# initialize ball_pos and ball_vel for new bal in middle of table
# if direction is RIGHT, the ball's velocity is upper right, else upper left
def spawn_ball(direction):
    global ball_pos, ball_vel # these are vectors stored as lists
    ball_pos = list(ball_initial_pos)
    if direction:
        ball_vel = list(ball_initial_vel_right)
    else:
        ball_vel = list(ball_initial_vel_left)




# define event handlers
def new_game():
    global paddle1_pos, paddle2_pos, paddle1_vel, paddle2_vel  # these are numbers
    global score1, score2  # these are ints
    score1 = 0
    score2 = 0
    paddle1_pos = paddle1_initial_pos
    paddle2_pos = paddle2_initial_pos

def button_handler():
    global score1, score2, RIGHT, LEFT
    score1 = 0
    score2 = 0
    spawn_ball(random.choice([RIGHT, LEFT]))

def draw(canvas):
    global score1, score2, paddle1_pos, paddle2_pos, ball_pos, ball_vel, paddle1_vel, paddle2_vel


    # draw mid line and gutters    -DONE
    canvas.draw_line([WIDTH / 2, 0],[WIDTH / 2, HEIGHT], 1, "White")
    canvas.draw_line([PAD_WIDTH, 0],[PAD_WIDTH, HEIGHT], 1, "White")
    canvas.draw_line([WIDTH - PAD_WIDTH, 0],[WIDTH - PAD_WIDTH, HEIGHT], 1, "White")

    # update ball -DONE-
    ball_pos[0] += ball_vel[0]
    ball_pos[1] += ball_vel[1]

    # collision handler   -DONE-
    if ball_pos[0] <= BALL_RADIUS + PAD_WIDTH:
        ball_vel[0] = -1.1 * ball_vel[0]

        if ball_pos[1] < paddle2_pos[1] - HALF_PAD_HEIGHT - 5 or ball_pos[1] > paddle2_pos[1] + HALF_PAD_HEIGHT + 5:
            score1 = score1 + 1
            spawn_ball(RIGHT)
            ball_acceleration = list(ball_initial_acceleration)

    if ball_pos[0] >= WIDTH - 1 - BALL_RADIUS - PAD_WIDTH:
        ball_vel[0] = - 1.1 * ball_vel[0]

        if ball_pos[1] < paddle1_pos[1] - (HALF_PAD_HEIGHT + 5) or ball_pos[1] > paddle1_pos[1] + HALF_PAD_HEIGHT + 5:
            score2 = score2 + 1
            spawn_ball(LEFT)
            ball_acceleration = list(ball_initial_acceleration)

    if ball_pos[1] <= BALL_RADIUS or ball_pos[1] >= HEIGHT - 1 - BALL_RADIUS:
        ball_vel[1] = -ball_vel[1]

    # draw ball       - DONE-

    canvas.draw_circle(ball_pos, BALL_RADIUS, 3, "Red", "White")

    # update paddle's vertical position, keep paddle on the screen    -DONE!!!!


    if paddle1_pos[1] + paddle1_vel[1] >= HALF_PAD_HEIGHT and paddle1_pos[1] + paddle1_vel[1] <= HEIGHT - HALF_PAD_HEIGHT:
        paddle1_pos[1] += paddle1_vel[1]
    else:
        paddle1_pos[1]

    if paddle2_pos[1] + paddle2_vel[1] >= HALF_PAD_HEIGHT and paddle2_pos[1] + paddle2_vel[1] <= HEIGHT - HALF_PAD_HEIGHT:
        paddle2_pos[1] += paddle2_vel[1]
    else:
        paddle2_pos[1]


    # draw paddles
    canvas.draw_polygon([[paddle1_pos[0] + HALF_PAD_WIDTH/2, paddle1_pos[1] + HALF_PAD_HEIGHT],
                         [paddle1_pos[0] - HALF_PAD_WIDTH/2 + 1, paddle1_pos[1] + HALF_PAD_HEIGHT],
                         [paddle1_pos[0] - HALF_PAD_WIDTH/2 +1, paddle1_pos[1] - HALF_PAD_HEIGHT],
                         [paddle1_pos[0] + HALF_PAD_WIDTH/2, paddle1_pos[1] - HALF_PAD_HEIGHT]],
                        12, 'WHITE')

    canvas.draw_polygon([[paddle2_pos[0] + HALF_PAD_WIDTH/2 -1, paddle2_pos[1] + HALF_PAD_HEIGHT],
                         [paddle2_pos[0] - HALF_PAD_WIDTH/2 -1, paddle2_pos[1] + HALF_PAD_HEIGHT],
                         [paddle2_pos[0] - HALF_PAD_WIDTH/2 -1, paddle2_pos[1] - HALF_PAD_HEIGHT],
                         [paddle2_pos[0] + HALF_PAD_WIDTH/2 -1, paddle2_pos[1] - HALF_PAD_HEIGHT]],
                        12, 'WHITE')

    # draw scores
    canvas.draw_text(str(score1), (550,50), 40, "White")
    canvas.draw_text(str(score2), (30,50), 40, "White")


def keydown(key):
    global paddle1_vel, paddle2_vel
    acc = 10

    if key == simplegui.KEY_MAP["up"]:
        if paddle1_pos[1] <= HALF_PAD_HEIGHT:
            paddle1_vel[1] = 0
        else:
            paddle1_vel[1] -= acc

    if key == simplegui.KEY_MAP["down"]:
        if paddle1_pos[1] >= HEIGHT - 1 - HALF_PAD_HEIGHT:
            paddle1_vel[1] = 0
        else:
            paddle1_vel[1] += acc

    if key == simplegui.KEY_MAP["W"]:
        if paddle2_pos[1] <= HALF_PAD_HEIGHT:
            paddle2_vel[1] = 0
        else:
            paddle2_vel[1] -= acc

    if key == simplegui.KEY_MAP["S"]:
        if paddle2_pos[1] >= HEIGHT - 1 - HALF_PAD_HEIGHT:
            paddle2_vel[1] = 0
        else:
            paddle2_vel[1] += acc #DONE


def keyup(key):
    global paddle1_vel, paddle2_vel
    if key == simplegui.KEY_MAP["up"] or key == simplegui.KEY_MAP["down"]:
        paddle1_vel = list(paddle1_initial_vel)
    if key == simplegui.KEY_MAP["W"] or key == simplegui.KEY_MAP["S"]:
        paddle2_vel = list(paddle2_initial_vel) #DONE


# create frame
frame = simplegui.create_frame("Pong", WIDTH, HEIGHT)
frame.set_draw_handler(draw)
frame.set_keydown_handler(keydown)
frame.set_keyup_handler(keyup)
frame.add_button('Restart', button_handler,50)

# start frame
new_game()
frame.start()
