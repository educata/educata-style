const r={title:"Components/Modal/DefaultModal"},s={args:{scroll:!1},render:d=>{const t=document.createElement("section"),a=document.createElement("button");return a.classList.add("btn","btn-primary"),a.innerText="Open Modal",a.onclick=()=>{const e=document.createElement("div");e.classList.add("modal"),e.innerHTML=`
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
      `,d.scroll&&(e.querySelector(".modal-body").innerHTML+=`
          ${new Array(10).fill("<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae asperiores magni similique laudantium saepe ab aspernatur, eius repellat a mollitia. Consequuntur ipsam eveniet tempora quae obcaecati doloremque eos alias quibusdam?</p>")}
        `);const n=e.querySelector(".modal-close");n==null||n.addEventListener("click",()=>{e.classList.remove("show"),setTimeout(()=>{e.remove()},300)}),setTimeout(()=>{e.classList.add("show")},300),t.appendChild(e)},t.appendChild(a),t}};var o,i,l;s.parameters={...s.parameters,docs:{...(o=s.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(l=(i=s.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};const c=["DefaultModal"];export{s as DefaultModal,c as __namedExportsOrder,r as default};
