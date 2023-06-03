import { render, screen } from "@testing-library/react";
import List from "./List";

// onek gulo test hoite pare tai "describe" use kora holo
describe("List Components with Data Props", () => {
  it("should test list header", () => {
    render(<List />);

    const header = screen.getByTestId("list-header");
    expect(header).toBeInTheDocument();
    expect(header).toHaveTextContent("List Items");
  });

  it("should test empty data props", () => {
    render(<List />);

    const ul = screen.getByTestId("list-container");
    expect(ul).toBeInTheDocument();

    // const listItems = screen.getAllByTestId("list-item");
    const listItems = screen.queryAllByTestId("list-item");
    expect(listItems).toHaveLength(0);
  });

  it("should test with the correct list items", () => {
    const data = ["one", "two", "three"];
    render(<List data={data} />);

    const listItems = screen.getAllByTestId("list-item");
    expect(listItems).toHaveLength(data.length);

    listItems.forEach((item, index) => {
      expect(item.textContent).toBe(data[index]);
      // aikhane toBeInTheDocument korar dorkar nai,karon amra data get kore niye asci
      // jodi query kore niye astam tokhnon lagto, get korle data documente always theke
    });
  });
});
