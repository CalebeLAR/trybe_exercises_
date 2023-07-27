import json
import random

with open('exercicio07/pokemons.json') as file:
    pokemons = json.load(file)['results']
    names = [pokemon['name'] for pokemon in pokemons]
    rando_name = random.choice(names)
    pista = ''
    print(rando_name.capitalize())
    for letter in rando_name:
        answer = input('Quem é esse pokemon?:')
        if (answer == rando_name):
            print("🎉PARABÉNS🎉")
            break
        else:
            pista += letter
            print(f"o pokemon começa com: {pista}")

    if pista == rando_name:
        print(rando_name.capitalize())
        print('mais sorte na proxima vez!')
