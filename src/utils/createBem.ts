interface BemModifier {
  [key: string]: boolean | undefined;
}
export const createBem = (block: string) => (
  element?: string,
  modifiers?: BemModifier
) => {
  let className = block;

  if (element) {
    className = `${block}__${element}`;
  }

  const mod = [];
  if (modifiers) {
    for (const modifier of Object.keys(modifiers)) {
      if (modifiers[modifier]) {
        mod.push(`${className}--${modifier}`);
      }
    }
    className += ` ${mod.join(' ')}`;
  }

  return className;
};

export const combineClassNames = (className: string, additional?: string) =>
  additional !== undefined ? `${className} ${additional}` : className;
