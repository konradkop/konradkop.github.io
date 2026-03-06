export default function FirstCliTool() {
  return (
    <article className="prose prose-invert max-w-3xl mx-auto">
      <h1>Building Your First CLI Tool in Rust</h1>

      <p>
        Rust makes it easy to build fast, reliable command-line tools.
        We'll use <code>clap</code> to parse command-line arguments.
      </p>

      <h2>Example CLI Tool</h2>

      <pre>
        <code>{`use clap::Parser;

#[derive(Parser)]
struct Args {
    name: String,
}

fn main() {
    let args = Args::parse();
    println!("Hello, {}", args.name);
}`}</code>
      </pre>

      <p>
        Compile with <code>cargo build</code> and run your tool:
      </p>

      <pre>
        <code>{`cargo run -- --name Konrad`}</code>
      </pre>

      <p>
        The program parses the command-line argument and prints a greeting.
        This demonstrates Rust's speed, type safety, and clear error messages.
      </p>
    </article>
  );
}