def power(base, exponent):


    def multiply(count):

        if count == exponent:
            return
        else:
            multiply.result *= base
            multiply(count + 1)

    multiply.result = 1
    multiply(0)


    return multiply.result


print power(2, 3)
