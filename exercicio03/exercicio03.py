import random


def load_words_and_choice_one():
    with open("./words.txt") as file:
        words = file.read().split("\n")
        word = random.choice(words)

    return word


def scrambled_words():
    """embaralha as letras de uma palavra e não deixa retornar uma combinação
    igual a palavra original, e retorna as duas"""
    word = load_words_and_choice_one()

    scrambled_word = word
    while scrambled_word == word:
        scrambled_word = "".join(random.sample(word, len(word)))

    return scrambled_word, word


def inicialize_game():
    """prime a palavra embaralhada e conta as tentativas do usuário"""
    scrambled_word, word = scrambled_words()
    print(f"palavra:{scrambled_word}")

    for tentativa in range(3, 0, -1):
        print(f"você tem {tentativa} tentativas")

        inputUser = input("digite aqui: ")

        if inputUser == word:
            print("🎉PARABÉNS🎉")
            break


if __name__ == "__main__":
    inicialize_game()
