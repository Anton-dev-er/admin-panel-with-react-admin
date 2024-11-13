 
Тестове завдання: Реалізація адміністративної панелі за допомогою React Admin

Мета: Створити адміністративну панель на базі React Admin, використовуючи мокові дані. Панель повинна підтримувати CRUD операції (створення, перегляд, редагування та видалення даних) для кількох ресурсів.

=============

### *** Запуск проєкту локально: *** <br />
&ensp;&ensp;**Client**:<br />
&ensp;&ensp;&ensp;&ensp;-npm install<br />
&ensp;&ensp;&ensp;&ensp;-npm run dev<br />
&ensp;&ensp;&ensp;&ensp;-перейти на localhost:8080 <br />
&ensp;&ensp;**Server**:<br />
&ensp;&ensp;&ensp;&ensp;-версія **node** v20.11.0<br />
&ensp;&ensp;&ensp;&ensp;-перейменувати /server/.env.example у .env, та налаштувати бд <br />
&ensp;&ensp;&ensp;&ensp;-npm install <br />
&ensp;&ensp;&ensp;&ensp;-npm run dev <br />

### *** Запуск проєкту через docker compose: ***<br />
&ensp;&ensp;&ensp;&ensp;-перейменувати /privat-24-test-task/.env.example у .env, та налаштувати бд <br />
&ensp;&ensp;&ensp;&ensp;-docker compose up<br />
&ensp;&ensp;&ensp;&ensp;-перейти на localhost:8080 <br />

=============

Список виконаниx задач
1. Налаштування бекенду та підключення бд<br />
   <img width="575" alt="Screenshot 2024-10-03 at 02 18 57" src="https://github.com/user-attachments/assets/78ddd8f6-a038-419f-9500-205a609d0b78">
2. Налаштування ресурсів для адмінки<br />
   <img width="233" alt="Screenshot 2024-10-03 at 02 20 11" src="https://github.com/user-attachments/assets/539ce6a3-5846-4e5f-959d-456cf47b902e">

3. Реалізуйвання CRUD (Create, Read, Update, Delete)<br />
<img width="220" alt="Screenshot 2024-10-03 at 02 22 18" src="https://github.com/user-attachments/assets/f09fb6d6-b1c6-44a8-9e40-6d47a2014809"><br />
<img width="1110" alt="Screenshot 2024-10-03 at 02 25 27" src="https://github.com/user-attachments/assets/b39df53e-ae6b-437a-a1f2-2ddb79e577e6"><br />
4. Реалізація взаємодії між ресурсами<br />
В clients ресурсі реалізуйте показ всіх замовлень orders конкретного клієнта.<br />
   <img width="620" alt="Screenshot 2024-10-03 at 02 27 14" src="https://github.com/user-attachments/assets/dda49c22-75c8-429e-9def-61cf5007b39f"><br />
В products ресурсі реалізуйте відображення масиву торгових точок shops, в яких конкретний продукт є в наявності.<br />
   <img width="196" alt="Screenshot 2024-10-03 at 02 27 27" src="https://github.com/user-attachments/assets/564ce33a-c003-41f9-9f9c-84a393ebd8e3"><br />
5. Використання компонентів Material-UI для побудови інтерфейсу.<br />
<img width="508" alt="Screenshot 2024-10-03 at 02 28 50" src="https://github.com/user-attachments/assets/99a2f7cd-faaf-4859-b525-59087c44d00b"><br />
6. Дашбоард для відображення статистикі<br />
<img width="1472" alt="Screenshot 2024-10-03 at 02 29 43" src="https://github.com/user-attachments/assets/4e18f239-48ce-4cb4-bc0f-dfd2f6fae02f"><br />
7. Запуск проєкту через Docker контейнер



   
   
    
