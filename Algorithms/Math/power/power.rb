def power(base, exponent)

    result = 1

    multiply = lambda do |count|
        if(count == exponent)
            return
        end

        result = result * base
        multiply.call(count + 1)

    end

    multiply.call(0)

    return result

end


puts power(10, 3)
