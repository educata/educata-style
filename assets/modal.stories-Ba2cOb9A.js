const p={title:"Components/Modal"},t={args:{scroll:!1},render:o=>{const s=document.createElement("section"),a=document.createElement("button");return a.classList.add("btn","btn-primary"),a.innerText="Open Modal",a.onclick=()=>{const e=document.createElement("div");e.classList.add("modal"),e.innerHTML=`
        <div class="modal-content">
          <div class="modal-header">
            <span class="modal-title">Header name</span>
            <span class="modal-close">&times;</span>
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
      `,o.scroll&&(e.querySelector(".modal-body").innerHTML+=`
          ${new Array(10).fill("<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae asperiores magni similique laudantium saepe ab aspernatur, eius repellat a mollitia. Consequuntur ipsam eveniet tempora quae obcaecati doloremque eos alias quibusdam?</p>")}
        `);const n=e.querySelector(".modal-close");n==null||n.addEventListener("click",()=>{e.classList.remove("show"),setTimeout(()=>{e.remove()},300)}),setTimeout(()=>{e.classList.add("show")},300),s.appendChild(e)},s.appendChild(a),s}},i={args:{scroll:!1},render:o=>{const s=document.createElement("section"),a=document.createElement("button");return a.classList.add("btn","btn-primary"),a.innerText="Open Modal",a.onclick=()=>{const e=document.createElement("div");e.classList.add("modal","modal-mobile-fullscreen"),e.innerHTML=`
        <div class="modal-content">
          <div class="modal-header">
            <span class="modal-title">Header name</span>
            <span class="modal-close">&times;</span>
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
      `,o.scroll&&(e.querySelector(".modal-body").innerHTML+=`
          ${new Array(10).fill("<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae asperiores magni similique laudantium saepe ab aspernatur, eius repellat a mollitia. Consequuntur ipsam eveniet tempora quae obcaecati doloremque eos alias quibusdam?</p>")}
        `);const n=e.querySelector(".modal-close");n==null||n.addEventListener("click",()=>{e.classList.remove("show"),setTimeout(()=>{e.remove()},300)}),setTimeout(()=>{e.classList.add("show")},300),s.appendChild(e)},s.appendChild(a),s}};var l,d,r;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
            <span class="modal-close">&times;</span>
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
      const closeButton = modal.querySelector(".modal-close");
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
}`,...(r=(d=t.parameters)==null?void 0:d.docs)==null?void 0:r.source}}};var c,m,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
            <span class="modal-close">&times;</span>
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
      const closeButton = modal.querySelector(".modal-close");
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
}`,...(u=(m=i.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};const b=["DefaultModal","MobileFullScreenModal"];export{t as DefaultModal,i as MobileFullScreenModal,b as __namedExportsOrder,p as default};
