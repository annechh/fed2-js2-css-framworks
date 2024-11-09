export function formStyle() {
  const form = document.querySelector('.form');
  form.classList.add('flex', 'flex-col', 'gap-4', 'max-w-lg', 'w-full');
}

export function labelInputDivStyle() {
  const targetDiv = document.querySelectorAll('.label-input-div');

  targetDiv.forEach((div) => {
    div.classList.add('flex', 'flex-col', 'gap-2', 'mx-[10px]');
  });
}

export function labelStyle() {}

export function inputStyle() {}

export function bodyStyle() {}

export function mainStyle() {}
