import random

# lista de palavras
# escolhe "aleatoriamente" uma delas
# embaralha a palavra
# recebe um input do usuario
# compara se a palavra digitada é igual a ecolhida
# se tentar mais de 3 vezes perde

words = ["carro", "barril", "pato"]
word = random.choice(words)

# embaralha as palavras de forma sempre diferente
scrambled_word = word
while scrambled_word == word:
    scrambled_word = "".join(random.sample(word, len(word)))

# layout do app
print(f"palavra:{scrambled_word}")

for tentativa in range(3, 0, -1):
    print(f'você tem {tentativa} tentativas')

    inputUser = input("digite aqui: ")

    if (inputUser == word):
        print('🎉PARABÉNS🎉')
        break

# metodo import RANDON.
