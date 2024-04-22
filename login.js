const pagebox=document.querySelector('.page-box');
const btnNext=document.querySelector('.btn-next');
const btnBack=document.querySelector('.btn-back');
const checkboxPass=document.querySelector('.checkbox-pass');
const emailinput=document.querySelector('.email');
const passwordinput=document.querySelector('.password');
const loginTitle=document.querySelector('.logintitle-text');
const userEmail=document.querySelector('.useremail');


btnNext.onclick=(e)=>{
    e.preventDefault();
    pagebox.classList.add('active-pass');
   setTimeout(()=>passwordInput.focus(),500);
   loginTitle.innerHTML='welcome';
  userEmail.innerHTML=emailinput.value;
emailinput.focus;

};
btnBack.onclick=(e)=>{
    e.preventDefault();
    pagebox.classList.add('active-pass');
    loginTitle.innerHTML='login';
    userEmail.innerHTML='please login to use this platform';

};
checkboxPass.onclick=(e)=>{
   if(checkboxPass.checked){
    passwordInput.type='text';
   }
   else{
    passwordInput.type='password';
   }
};
