def power_set(input):

  def helper(index):
    if(index >= len(input)):
      return

    letter = input[index]
    temp = []

    for i in helper.superSet:
      temp.append(i)
      temp.append(i + letter)

    helper.superSet = temp
    helper(index + 1)

  helper.superSet = [""]
  helper(0)

  return helper.superSet
