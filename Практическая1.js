let N
do
{
    N = prompt("Введите натуральное число")
    if(N != Math.floor(N))
        {
        alert("Некоректный ввод. Введите число.")
        }
    else if (isNaN(N))
        {
        alert("Некоректный ввод. Введите число.")
        }
    else if(N < 0)
        {
        alert('Вы ввели не то число')
        }
    else break
}while(true)       

    alert('Числа кратные 2 и не кратные 3')

    for(let i = 0; i <= N; i++)
    {
        i*i*i - 17 * i * N*N + N*N*N

        if(i%2==0 && i%3)
        { 
            alert (i)
        }
        else if(N <= 1)
        {
            alert('Таких чисел нет')
        }
        
    } 

