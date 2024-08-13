def ingresar_evaluacion():
    while True:
        print('1から5で評価を入力してください')
        point = input()
        if point.isdecimal():
            point = int(point)
            if  point <= 0 or point > 5: 
                print('1から5で入力してください')
            else:
                print('コメントを入力してください')
                comment = input()
                guardar_evaluacion(point, comment)
                break
        else:
            print('評価ポイントは数字で入力してください')

def guardar_evaluacion(point, comment):
    post = f'ポイント: {point} コメント: {comment}'
    with open("data.txt", 'a') as file_pc:
        file_pc.write(f'{ post } \n')

def mostrar_resultados():
    print('これまでの結果')
    with open("data.txt", "r") as read_file:
        print(read_file.read())

def mostrar_menu():
    print('実施したい処理を選択してください')
    print('1:評価ポイントとコメントを入力する')
    print('2:今までの結果を確認する')
    print('3:終了する')

def main():
    while True:
        mostrar_menu()
        num = input()

        if num.isdecimal():
            num = int(num)

            if num == 1:
                ingresar_evaluacion()
            elif num == 2:
                mostrar_resultados()
            elif num == 3:
                print('終了します')
                break
            else:
                print('1から3で入力してください')
        else:
            print('1から3で入力してください')

if __name__ == "__main__":
    main()
