# quiz for project

print('Welcome to our quiz.  In this quiz you will be tested on what you learned from our website.')

print (" ")
print ('a)  And thus, in all these ways, we will strive to transmit this city not only not less, but greater, better, and more beautiful than it was transmitted to us.')
print ("  ")
print ('b)  We will never bring disgrace to our city by any act of dishonesty or cowardice nor ever desert our suffering comrades in the ranks.')
print("  ")
print ('c)  We will fight for the ideals and sacred things of the city, both alone and with many.')
print (" ")
print ("d)  We will revere and obey the city's laws, and do our best to incite a like respect and reverence in those about us who are prone to annul them and set them at naught.")
print (" ")
q1 = raw_input('What is the last line oath state?')

if q1 == "a":
    print('Good Job!  That is correct.')
else:
    print('That is incorrect.  The correct answer is A.')

print ('a)  New York')
print ('b)  Athens')
print ('c)  Sparta')
print ('d)  Paris')

q2 = raw_input('Where did the Ephebic Oath originate from?')

if q1 == "a" and q2 == "b":
    print('Amazing!  You are correct once again.')
if q2 == "b":
    print('You got that right.')
if q2 != 'b':
    print('That is incorrect.  The correct answer is B.')

print('a)  October 25, 2007')
print('b)  June 8, 1980')
print('c)  November 7, 1885')
print('d)  October 25, 1984')

q3 = raw_input('What date did the freshman class of Townsend Harris High School first recite the Ephebic Oath.?')

if q1 == "a" and q2 == "b" and q3 == "d":
    print('Incredible!  You are on fire!')
if q3 == "d":
    print('You got that right.')
if q3 != 'd':
    print('That is incorrect.  The correct answer is D.')

print('a)  Townsend Harris was the Govenor of New York, who served in the U.S. Navy.')
print('b)  Townsend Harris was a New York merchant and politician, who served as the first United States Consul General to Japan.')
print('c)  Townsend Harris was a New York politician, who was the mayor of New York from 1856 - 1860.')
print('d)  Townsend Harris was a New York business man who owned a huge real estate business.')

q4 = raw_input('Who was Townsend Harris?')

if q1 == "a" and q2 == "b" and q3 == "d" and q4 == "b":
    print('You That is correct!  You are perfect today!')
if q4 == "b":
    print('You got that right.')
if q4 != 'b':
    print('That is incorrect.  The correct answer is B')


print('Townsend Harris wanted everyone to have the opportunity to have access to free education')
print('Townsend Harris wanted to be rich')
print('Townsend harris wanted girls to get an education')
print('Townsend Harris wanted peace between all the countries of the world.')

q5 = raw_input('What did Townsend Harris want the most?')

if q1 == "a" and q2 == "b" and q3 == "d" and q4 == "b" and q5 == 'a':
    ('You are correct again!  You got a perfect score on the quiz!')
if q5 == 'a':
    print('You got that right.  The quiz is now over.')
if q5 != 'a':
    print('That is incorrect.  The quiz is now over.')

print('Thank you for playing our quiz!!!')
