import ItemFaq from "./ItemFaq";
import classes from "hooks/classes";

// Literal class strings so Tailwind's scanner can see them — the breakpoint
// differs per surface (the home section carries a 320px sticky column beside
// the list, the FAQ page has the full width) and a template string would be
// compiled away.
const COLUMN_STYLES = {
  md: { grid: "md:grid-cols-2", seam: "-mt-px md:mt-0" },
  xl: { grid: "xl:grid-cols-2", seam: "-mt-px xl:mt-0" },
};

// Two columns are rendered as two independent lists rather than one grid that
// flows across. In a flowing grid, expanding an answer grows its row and
// shoves the item beside it down the page; split lists let each column settle
// on its own, so opening on the right never moves anything on the left.
//
// Below the breakpoint the lists stack, and the second one is pulled up a
// pixel so its top rule sits on the last row's bottom rule instead of doubling.
function FaqList({ items, open, setOpen, columns = 1, twoColFrom = "md" }) {
  if (!items?.length) return null;

  const rule = "border-t border-solid border-[#E6E8E8] dark:border-[#0F3F4E]";

  if (columns !== 2) {
    return (
      <ul className={rule}>
        {items.map((item, index) => (
          <ItemFaq
            key={item.id ?? index}
            i={item.id ?? index}
            open={open}
            setOpen={setOpen}
            data={item}
          />
        ))}
      </ul>
    );
  }

  const style = COLUMN_STYLES[twoColFrom] || COLUMN_STYLES.md;
  const half = Math.ceil(items.length / 2);
  const groups = [items.slice(0, half), items.slice(half)].filter(
    (group) => group.length
  );

  return (
    <div className={classes("grid items-start gap-x-8", style.grid)}>
      {groups.map((group, groupIndex) => (
        <ul
          key={groupIndex}
          className={classes(rule, groupIndex > 0 && style.seam)}
        >
          {group.map((item, index) => (
            <ItemFaq
              key={item.id ?? `${groupIndex}-${index}`}
              i={item.id ?? `${groupIndex}-${index}`}
              open={open}
              setOpen={setOpen}
              data={item}
            />
          ))}
        </ul>
      ))}
    </div>
  );
}

export default FaqList;
