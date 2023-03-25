/* DEVELOPER: Benjamin Shuster, IS117-002, Spring 2023 */
let footerWrap= document.createElement("div")
footerWrap.classList.add("footer")
footerWrap.innerHTML=`
<!--https://getbootstrap.com/docs/5.3/examples/footers/-->
<div class="container">
  <footer class="py-3 my-4">
    <ul class="nav justify-content-center border-bottom pb-3 mb-3">
      <li class="nav-item"><a href="tos.html" class="nav-link px-2 text-muted">Terms of Service</a></li>
      <li class="nav-item"><a href="contact.html" class="nav-link px-2 text-muted">Contact Us</a></li>
      <li class="nav-item"><a href="privacy.html" class="nav-link px-2 text-muted">Privacy Statement</a></li>
    </ul>
    <p class="text-center text-muted">&#169; Copyright Benjamin Shuster 2023</p>
  </footer>
</div>
`
document.body.appendChild(footerWrap);