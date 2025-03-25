import { Meta, StoryObj } from "@storybook/html";

type ModalArgs = {
  scroll: boolean;
};

const meta: Meta<ModalArgs> = {
  title: "Components/Modal/MobileFullScreenModal",
};

export default meta;
type Story = StoryObj<ModalArgs>;

export const MobileFullScreenModal: Story = {
  args: {
    scroll: false,
  },
  render: (args) => {
    const section = document.createElement("section");
    const button = document.createElement("button");
    button.classList.add("btn", "btn-primary");
    button.innerText = "Open Modal";
    button.onclick = () => {
      const modal = document.createElement("div");
      modal.classList.add("modal", "modal-mobile-fullscreen");
      modal.innerHTML = `
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
      `;
      if (args.scroll) {
        modal.querySelector(".modal-body").innerHTML += `
          ${new Array(10).fill(
            "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae asperiores magni similique laudantium saepe ab aspernatur, eius repellat a mollitia. Consequuntur ipsam eveniet tempora quae obcaecati doloremque eos alias quibusdam?</p>"
          )}
        `;
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
  },
};
