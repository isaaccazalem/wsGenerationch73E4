
# primera instruccion
num1 = float(input())
num2 = float(input())

result = num1 + num2
print(result)
# terminamos la primera instruccion sencilla del ejercicio
# //////////////////////////////////////////////////////////

num1 = float(input("Dame el primer numero: "))
num2 = float(input("Dame el segundo numero: "))
print(f"La suma es: {num1 + num2}")


print("\n--- Funcion Extra ---")

op = input("Que operacion quieres? (+, -, *, /, %): ")

if op == "+":
    print(num1 + num2)
elif op == "-":
    print(num1 - num2)
elif op == "*":
    print(num1 * num2)
elif op == "/":
    if num2 != 0:
        print(num1 / num2)
    else:
        print("No se puede dividir entre 0")
elif op == "%":
    print(num1 % num2)


print("\n--- 3 numeros ---")
a = float(input("Num 1: "))
b = float(input("Num 2: "))
c = float(input("Num 3: "))
print(f"Suma de 3: {a + b + c}")


print("\n--- Calculadora avanzada ---")
expresion = input("Escribe una operacion ej: 2 + 4 - 3 : ")
print(f"Resultado: {eval(expresion)}")