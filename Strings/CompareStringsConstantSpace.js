// Python Solution
//
// def compare_strings(s1, s2):
//
// 	def edit_string(s):
// 		i = 0
// 		while i < len(s)-1:
// 			if s[i] == '/': # we found a command
// 				if s[i+1] == 'b': # backspace
// 					if i < 2: # cant erase char if /b is first in string
// 						s = s[2:]
// 					else:
// 						s = s[:i-1] + s[i+2:]
// 						i -= 2
// 			i += 1
// 		return s
//
// 	s1 = edit_string(s1)
// 	s2 = edit_string(s2)
//
// 	print s1, s2
// 	c1 = ""
// 	c2 = ""
// 	i = 0
// 	j = 0
// 	s1upper = False
// 	s2upper = False
// 	while True:
// 		# print i, len(s1), j, len(s2)
// 		if i == len(s1) and j == len(s2):
// 			return True
// 		if i == len(s1):
// 			for k in range(j, len(s2), 2):
// 				if s2[k] != '/':
// 					return False
// 			return True
// 		if j == len(s2):
// 			for k in range(j, len(s1), 2):
// 				if s1[k] != '/':
// 					return False
// 			return True
//
// 		if s1[i] == '/':
// 			s1upper = not s1upper
// 			i+=2
// 		if s2[j] == '/':
// 			s2upper = not s2upper
// 			j+=2
//
// 		if s1upper:
// 			c1 = s1[i].upper()
// 		else:
// 			c1 = s1[i]
// 		if s2upper:
// 			c2 = s2[j].upper()
// 		else:
// 			c2 = s2[j]
//
// 		# print c1, c2
// 		if c1 != c2:
// 			return False
// 		j+=1
// 		i+=1
//
// s1 = "abc/b/cae/b"
// s2 = "ab/ca/c/c"
// print compare_strings(s1, s2)
