def busca_minimos_multiplos(num):
    minimos_multiplos = []
    for n in range(1, num + 1):
        if (n % 15 == 0):
            minimos_multiplos.append("FizzBuzz")
        elif (n % 5 == 0):
            minimos_multiplos.append("Buzz")
        elif (n % 3 == 0):
            minimos_multiplos.append("Fizz")
        else:
            minimos_multiplos.append(n)
    return minimos_multiplos


if __name__ == "__main__":
    num = input("digite o numero:")
    print(busca_minimos_multiplos(int(num)))
