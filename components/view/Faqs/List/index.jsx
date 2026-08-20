import FaqTabs from "components/common/Faqs/FaqTabs";
import FaqList from "components/common/Faqs/FaqList";
import { useMemo, useState } from "react";

// The FAQ page shares the home section's category chips and accordion, so the
// two surfaces read as one system. The old illustrated rail — 120px buttons
// with 93px circle icons down the side — is gone: categories are a filter, and
// giving a filter its own column pushed the answers into a narrow gutter.
// Reclaiming the full width is what makes two columns of answers possible.
function List({ faqs, categoryList }) {
  const [chosen, setChosen] = useState(null);
  const [open, setOpen] = useState(null);

  const categories = useMemo(
    () =>
      Object.entries(categoryList || {}).map(([id, label]) => ({ id, label })),
    [categoryList]
  );

  // Falling back to the first category during render rather than setting it in
  // an effect: this page is server-rendered for search engines, and an effect
  // would ship HTML with the chips present and every answer missing.
  const catSelect = chosen ?? categories[0]?.id ?? null;

  // The API keys answers by category, and the ids only have to be unique
  // within the rendered list — prefixing with the category keeps them stable
  // when the reader switches tabs.
  const items = useMemo(() => {
    const list = (faqs || {})[catSelect];
    if (!Array.isArray(list)) return [];

    return list.map((item, index) => ({ ...item, id: `${catSelect}-${index}` }));
  }, [faqs, catSelect]);

  const selectCategory = (id) => {
    setOpen(null);
    setChosen(id);
  };

  return (
    <section className="container my-[27px] sm:my-11">
      <div className="fade-in">
        <FaqTabs
          items={categories}
          value={catSelect}
          onChange={selectCategory}
        />

        <div className="mt-7 sm:mt-9">
          <FaqList
            items={items}
            open={open}
            setOpen={setOpen}
            columns={2}
            twoColFrom="md"
          />
        </div>
      </div>
    </section>
  );
}

export default List;
