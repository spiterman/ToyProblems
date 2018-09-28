def sortColors(arr):
  result = []
  count = [0, 0, 0]

  for i in arr:
    count[i] += 1

  for index, val in enumerate(count):
    while val > 0:
      result.append(index)
      val -= 1

  return result

print sortColors([1, 2, 0, 2, 0])
