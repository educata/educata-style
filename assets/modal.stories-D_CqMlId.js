const p={title:"Components/Modal"},s={args:{scroll:!1},render:i=>{const a=document.createElement("section"),t=document.createElement("button");return t.classList.add("btn","btn-primary"),t.innerText="Open Modal",t.onclick=()=>{const e=document.createElement("div");e.classList.add("modal"),e.innerHTML=`
        <div class="modal-content">
          <div class="modal-header">
            <span class="modal-title">Header name</span>
            <button type="button" class="btn-close" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <h2>Some header</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo ipsam necessitatibus
              architecto eligendi mollitia fugit quasi voluptatibus dolor quisquam sint? Aliquam
              culpa quos necessitatibus in, labore sequi beatae debitis ullam.
            </p>
          </div>
        </div>
      `,i.scroll&&(e.querySelector(".modal-body").innerHTML+=`
          ${new Array(10).fill("<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae asperiores magni similique laudantium saepe ab aspernatur, eius repellat a mollitia. Consequuntur ipsam eveniet tempora quae obcaecati doloremque eos alias quibusdam?</p>")}
        `);const n=e.querySelector(".btn-close");n==null||n.addEventListener("click",()=>{e.classList.remove("show"),setTimeout(()=>{e.remove()},300)}),setTimeout(()=>{e.classList.add("show")},300),a.appendChild(e)},a.appendChild(t),a}},o={args:{scroll:!1},render:i=>{const a=document.createElement("section"),t=document.createElement("button");return t.classList.add("btn","btn-primary"),t.innerText="Open Modal",t.onclick=()=>{const e=document.createElement("div");e.classList.add("modal","modal-mobile-fullscreen"),e.innerHTML=`
        <div class="modal-content">
          <div class="modal-header">
            <span class="modal-title">Header name</span>
            <button type="button" class="btn-close" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <h2>Some header</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo ipsam necessitatibus
              architecto eligendi mollitia fugit quasi voluptatibus dolor quisquam sint? Aliquam
              culpa quos necessitatibus in, labore sequi beatae debitis ullam.
            </p>
          </div>
        </div>
      `,i.scroll&&(e.querySelector(".modal-body").innerHTML+=`
          ${new Array(10).fill("<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae asperiores magni similique laudantium saepe ab aspernatur, eius repellat a mollitia. Consequuntur ipsam eveniet tempora quae obcaecati doloremque eos alias quibusdam?</p>")}
        `);const n=e.querySelector(".btn-close");n==null||n.addEventListener("click",()=>{e.classList.remove("show"),setTimeout(()=>{e.remove()},300)}),setTimeout(()=>{e.classList.add("show")},300),a.appendChild(e)},a.appendChild(t),a}};var l,d,r;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    scroll: false
  },
  render: args => {
    const section = document.createElement("section");
    const button = document.createElement("button");
    button.classList.add("btn", "btn-primary");
    button.innerText = "Open Modal";
    button.onclick = () => {
      const modal = document.createElement("div");
      modal.classList.add("modal");
      modal.innerHTML = \`
        <div class="modal-content">
          <div class="modal-header">
            <span class="modal-title">Header name</span>
            <button type="button" class="btn-close" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <h2>Some header</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo ipsam necessitatibus
              architecto eligendi mollitia fugit quasi voluptatibus dolor quisquam sint? Aliquam
              culpa quos necessitatibus in, labore sequi beatae debitis ullam.
            </p>
          </div>
        </div>
      \`;
      if (args.scroll) {
        modal.querySelector(".modal-body").innerHTML += \`
          \${new Array(10).fill("<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae asperiores magni similique laudantium saepe ab aspernatur, eius repellat a mollitia. Consequuntur ipsam eveniet tempora quae obcaecati doloremque eos alias quibusdam?</p>")}
        \`;
      }
      const closeButton = modal.querySelector(".btn-close");
      closeButton?.addEventListener("click", () => {
        modal.classList.remove("show");
        setTimeout(() => {
          modal.remove();
        }, 300);
      });
      setTimeout(() => {
        modal.classList.add("show");
      }, 300);
      section.appendChild(modal);
    };
    section.appendChild(button);
    return section;
  }
}`,...(r=(d=s.parameters)==null?void 0:d.docs)==null?void 0:r.source}}};var c,m,u;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    scroll: false
  },
  render: args => {
    const section = document.createElement("section");
    const button = document.createElement("button");
    button.classList.add("btn", "btn-primary");
    button.innerText = "Open Modal";
    button.onclick = () => {
      const modal = document.createElement("div");
      modal.classList.add("modal", "modal-mobile-fullscreen");
      modal.innerHTML = \`
        <div class="modal-content">
          <div class="modal-header">
            <span class="modal-title">Header name</span>
            <button type="button" class="btn-close" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <h2>Some header</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo ipsam necessitatibus
              architecto eligendi mollitia fugit quasi voluptatibus dolor quisquam sint? Aliquam
              culpa quos necessitatibus in, labore sequi beatae debitis ullam.
            </p>
          </div>
        </div>
      \`;
      if (args.scroll) {
        modal.querySelector(".modal-body").innerHTML += \`
          \${new Array(10).fill("<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae asperiores magni similique laudantium saepe ab aspernatur, eius repellat a mollitia. Consequuntur ipsam eveniet tempora quae obcaecati doloremque eos alias quibusdam?</p>")}
        \`;
      }
      const closeButton = modal.querySelector(".btn-close");
      closeButton?.addEventListener("click", () => {
        modal.classList.remove("show");
        setTimeout(() => {
          modal.remove();
        }, 300);
      });
      setTimeout(() => {
        modal.classList.add("show");
      }, 300);
      section.appendChild(modal);
    };
    section.appendChild(button);
    return section;
  }
}`,...(u=(m=o.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};const b=["DefaultModal","MobileFullScreenModal"];export{s as DefaultModal,o as MobileFullScreenModal,b as __namedExportsOrder,p as default};
