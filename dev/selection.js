export function logSelection(selection, x, y) {
  console.log('"' + selection + '" was selected at x=' + x + ', y=' + y);
}

export function getSelection() {
  let selection = '';
  if (window.getSelection) {
    selection = window.getSelection();
  } else if (document.selection) {
    selection = document.selection.createRange();
  }
  return selection.toString();
}
