do
{
let name = prompt("Введите пользователя");
if(name == 'admin')
{
    let password = prompt("Введите пароль")
    if(password == "Чёрный Властелин")
    {
        alert("Добро пожаловать!")
    }
    else if(password)
    {
        alert("Пароль неверен")
    }
    else
    {
        alert("Вход отменён")
    }
}
else if(name)
{
    alert("Я вас не знаю")
}
else
{
    alert("Вход отменён")
}
}while(true)