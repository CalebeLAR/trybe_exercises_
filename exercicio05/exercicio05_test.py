from exercicio05 import busca_minimos_multiplos


def test_por_tres():
    'deve retornar "Fizz" se for multiplo de 3'
    assert busca_minimos_multiplos(3) == [1, 2, "Fizz"]


def test_por_cinco():
    'deve retornar "Fizz" se for multiplo de 5'
    assert busca_minimos_multiplos(5) == [1, 2, "Fizz", 4, "Buzz"]


def test_por_quinze():
    'deve retornar "FizzBuzz" se for multiplo de 15'
    assert busca_minimos_multiplos(15)[-1] == 'FizzBuzz'
