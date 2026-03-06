export default function BorrowChecker() {
  return (
    <article className="prose prose-invert max-w-3xl mx-auto">
      <h1>Understanding the Rust Borrow Checker</h1>

      <p>
        Rust’s borrow checker ensures memory safety by enforcing rules
        around ownership and borrowing. Let’s see it in action.
      </p>

      <h2>Example: Borrowing a String</h2>

      <pre>
        <code>{`fn main() {
    let s = String::from("hello");
    let r1 = &s;
    let r2 = &s;
    println!("{} and {}", r1, r2);
}`}</code>
      </pre>

      <p>
        Here, multiple immutable references are allowed. The borrow checker
        ensures you cannot mutate the string while it is borrowed immutably.
      </p>

      <h2>Mutable Borrowing</h2>

      <pre>
        <code>{`fn main() {
    let mut s = String::from("hello");
    let r1 = &mut s;
    r1.push_str(", world");
    println!("{}", r1);
}`}</code>
      </pre>

      <p>
        Only one mutable reference is allowed at a time. Rust enforces this
        at compile-time to prevent data races.
      </p>

      <p>
        Understanding ownership, mutable and immutable borrowing is key
        to writing safe Rust programs.
      </p>
    </article>
  );
}