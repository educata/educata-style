const v={title:"Variables/Colors"},u=[{name:"white",value:"#ffffff"},{name:"black",value:"#171719"},{name:"red",value:"#cc1f4f"},{name:"blue",value:"#6666ff"},{name:"green",value:"#51d253"},{name:"yellow",value:"#e6fd53"},{name:"purple",value:"#c05be0"}],l={name:"Color Table",parameters:{layout:"center",docs:{canvas:{sourceState:"none"}}},render:()=>{const e=document.createElement("div");e.classList.add("container-fluid"),e.innerHTML=`
      <style>
        table, th, td {
          border-collapse: collapse;
          border: 1px solid var(--ec-story-border, --ec-color-green-100);
          background-color: var(--ec-story-bg, --ec-color-green-100);
        }
        th, td {
          padding: 10px;
          text-align: left;
        }
        table td svg {
          height: 16px;
          transition: 0.5s ease;
        }
        table td button:hover svg {
          fill: var(--ec-color-green-100);
        }
        table td:last-child {
          width: 24px;
          padding: 0;
          text-align: center;
        }
        table td:last-child button {
          width: 100%;
          height: 37px;
        }
      </style>
    `;const t=document.createElement("table");t.classList.add("w-100");const a=document.createElement("thead");a.innerHTML=`
      <tr>
        <th>Color Name</th>
        <th>Color</th>
        <th>Variable name</th>
        <th>Variable value</th>
        <th>Copy</th>
      </tr>
    `,t.appendChild(a);const c=document.createElement("tbody");return p(u).forEach(n=>{const r=document.createElement("tr"),o=document.createElement("button");o.classList.add("btn","btn-primary"),o.setAttribute("data-color-variable-name",n.name),o.addEventListener("click",b),o.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M208 0L332.1 0c12.7 0 24.9 5.1 33.9 14.1l67.9 67.9c9 9 14.1 21.2 14.1 33.9L448 336c0 26.5-21.5 48-48 48l-192 0c-26.5 0-48-21.5-48-48l0-288c0-26.5 21.5-48 48-48zM48 128l80 0 0 64-64 0 0 256 192 0 0-32 64 0 0 48c0 26.5-21.5 48-48 48L48 512c-26.5 0-48-21.5-48-48L0 176c0-26.5 21.5-48 48-48z"/></svg>',r.innerHTML=`
        <td>${n.name}</td>
        <td style="background-color: ${n.value};"></td>
        <td><code>--ec-color-${n.name}</code></td>
        <td><code>${n.value}</code></td>
      `;const d=document.createElement("td");d.appendChild(o),r.appendChild(d),c.appendChild(r)}),t.appendChild(c),e.appendChild(t),e}};function p(e){const t=[];return e.forEach(a=>{t.push({name:a.name,value:s(`--ec-color-${a.name}`)}),new Array(10).fill(0).map((n,r)=>(r+1)*10).reverse().forEach(n=>{const r=`--ec-color-${a.name}-${n}`,o=s(r);o&&t.push({name:`${a.name}-${n}`,value:o})})}),t}function s(e){return getComputedStyle(document.documentElement).getPropertyValue(e).trim()}function b(){const e=this.dataset.colorVariableName;if(!e)return;const t=`--ec-color-${e}`;navigator.clipboard.writeText(t),alert(`Copied color value: ${t}`)}var i,m,h;l.parameters={...l.parameters,docs:{...(i=l.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: "Color Table",
  parameters: {
    layout: "center",
    docs: {
      canvas: {
        sourceState: "none"
      }
    }
  },
  render: () => {
    const div = document.createElement("div");
    div.classList.add("container-fluid");
    div.innerHTML = \`
      <style>
        table, th, td {
          border-collapse: collapse;
          border: 1px solid var(--ec-story-border, --ec-color-green-100);
          background-color: var(--ec-story-bg, --ec-color-green-100);
        }
        th, td {
          padding: 10px;
          text-align: left;
        }
        table td svg {
          height: 16px;
          transition: 0.5s ease;
        }
        table td button:hover svg {
          fill: var(--ec-color-green-100);
        }
        table td:last-child {
          width: 24px;
          padding: 0;
          text-align: center;
        }
        table td:last-child button {
          width: 100%;
          height: 37px;
        }
      </style>
    \`;
    const table = document.createElement("table");
    table.classList.add("w-100");
    const thead = document.createElement("thead");
    thead.innerHTML = \`
      <tr>
        <th>Color Name</th>
        <th>Color</th>
        <th>Variable name</th>
        <th>Variable value</th>
        <th>Copy</th>
      </tr>
    \`;
    table.appendChild(thead);
    const tbody = document.createElement("tbody");
    transformBaseColorsToShadedColors(BASE_COLORS).forEach(color => {
      const tr = document.createElement("tr");
      const button = document.createElement("button");
      button.classList.add("btn", "btn-primary");
      button.setAttribute("data-color-variable-name", color.name);
      button.addEventListener("click", copyColor);
      button.innerHTML = \`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M208 0L332.1 0c12.7 0 24.9 5.1 33.9 14.1l67.9 67.9c9 9 14.1 21.2 14.1 33.9L448 336c0 26.5-21.5 48-48 48l-192 0c-26.5 0-48-21.5-48-48l0-288c0-26.5 21.5-48 48-48zM48 128l80 0 0 64-64 0 0 256 192 0 0-32 64 0 0 48c0 26.5-21.5 48-48 48L48 512c-26.5 0-48-21.5-48-48L0 176c0-26.5 21.5-48 48-48z"/></svg>\`;
      tr.innerHTML = \`
        <td>\${color.name}</td>
        <td style="background-color: \${color.value};"></td>
        <td><code>--ec-color-\${color.name}</code></td>
        <td><code>\${color.value}</code></td>
      \`;
      const td = document.createElement("td");
      td.appendChild(button);
      tr.appendChild(td);
      tbody.appendChild(tr);
    });
    table.appendChild(tbody);
    div.appendChild(table);
    return div;
  }
}`,...(h=(m=l.parameters)==null?void 0:m.docs)==null?void 0:h.source}}};const g=["ColorTable"];export{l as ColorTable,g as __namedExportsOrder,v as default};
