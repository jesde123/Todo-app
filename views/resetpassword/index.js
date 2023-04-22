const container = document.querySelector('#container');

(() =>{
    const token = window.location.pathname.split('/resetpassword/')[1];
    if (!token) { 
        container.innerHTML =  `
        <form class="flex flex-col  p-4 rounded-lg gap-4 bg-zinc-200 shadow-lg dark:bg-slate-700 dark:text-zinc-100">
        <h1 class="text-lg">Escribe tu correo, para la verificacion de la contrasena</h1>
        <label for="email-input" class="font-bold">Email</label>
        <input type="email" id="email-input" class= "text-black rounded-lg p-2 bg-zinc-100 focus:outline-indigo-700 dark:focus:outline-indigo-200 ">

        <button 
        class="bg-indigo-700 py-2 px-4 rounded-lg font-bold text-white hover:bg-indigo-800 text-center transition ease-in-out disabled:opacity-50 disabled:cursor-not-allowed">Enviar correo</button>
    </form>
        `;
    } 
})();
const form = container.children[0];
const emailInput = form.children[2];

form.addEventListener('submit', async e => {
    e.preventDefault();
    try {
        await axios.post('/api/resetpassword', { email: emailInput.value }) ;
        container.innerHTML = `
        <div class="flex flex-col  p-4 rounded-lg gap-4 bg-zinc-200 shadow-lg dark:bg-slate-700 dark:text-zinc-100">
        <h1 class="text-lg">se te ha enviado un correo electronico para recuperar tu contrasena</h1>
        `;
    } catch (error) {
        console.log(error);
    }

});