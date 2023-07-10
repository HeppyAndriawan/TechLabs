export function SwitchTo(props) {
  const condition = props.condition;
  return condition && props.children;
}
