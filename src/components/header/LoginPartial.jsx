export default function LoginPartial(){
    return(
        <>
            @using Microsoft.AspNetCore.Identity
@using SuaVoz.Areas.Identity.Data

@inject SignInManager<ApplicationUser> SignInManager
@inject UserManager<ApplicationUser> UserManager

@* <ul class="navbar-nav"> *@
@if (SignInManager.IsSignedIn(User))

{
    <li class="nav-item">
        <a class="nav-link " asp-area="" asp-controller="Denuncia" asp-action="Index"><i class="fa-solid fa-bullhorn"></i>
            Denúncia</a>
    </li>
    <li class="nav-item">
        <a id="manage" class="nav-link " asp-area="Identity" asp-page="/Account/Manage/Index" title="Manage">Bem vindo
            @UserManager.GetUserName(User)! </a>
    </li>
    <li class="nav-item">
        <form id="logoutForm" class="form-inline" asp-area="Identity" asp-page="/Account/Logout"
        asp-route-returnUrl="@Url.Action("Index", "Home", new { area = "" })">
            <button id="logout" type="submit" class="nav-link login_btn" style="">Sair <i
                class="fa-solid fa-right-from-bracket"></i></button>
        </form>
    </li>
}
else
{
    <li class="nav-item">
        <a class="nav-link " id="login" asp-area="Identity" asp-page="/Account/Login">Entrar <i
            class="fa-solid fa-right-to-bracket"></i></a>
    </li>
    <li class="nav-item">
        <a class="nav-link " id="register" asp-area="Identity" asp-page="/Account/Register">Criar Conta</a>
    </li>
}
@* </ul> *@

        
        </>
    )
}