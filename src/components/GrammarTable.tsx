import type { GrammarTable as GrammarTableType } from "@/data/types";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Sparkles } from "lucide-react";

interface GrammarTableProps {
  grammar: GrammarTableType;
}

const GrammarTable = ({ grammar }: GrammarTableProps) => {
  return (
    <div className="space-y-4" dir="ltr">
      <h4 className="font-extrabold text-lg">{grammar.title}</h4>
      <div className="rounded-2xl border border-border/30 overflow-hidden shadow-cosmic">
        <Table>
          <TableHeader>
            <TableRow className="gradient-cosmic">
              <TableHead className="font-bold text-left text-white">Subject</TableHead>
              <TableHead className="font-bold text-left text-white">Verb</TableHead>
              <TableHead className="font-bold text-left text-white">Example</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {grammar.rows.map((row, i) => (
              <TableRow
                key={i}
                className={`transition-colors ${i % 2 === 0 ? "bg-primary/[0.02]" : "bg-white"} hover:bg-primary/5`}
              >
                <TableCell className="font-semibold text-left">{row.subject}</TableCell>
                <TableCell className="text-primary font-bold text-left">{row.verb}</TableCell>
                <TableCell className="italic text-left text-muted-foreground">{row.example}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      {grammar.rules && grammar.rules.length > 0 && (
        <div className="cosmic-glass rounded-2xl p-5 space-y-2 neon-border-purple">
          <h5 className="font-bold text-sm flex items-center gap-1.5">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            Rules:
          </h5>
          <ul className="space-y-2 text-sm text-left">
            {grammar.rules.map((rule, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="mt-1.5 h-2 w-2 rounded-full gradient-cosmic flex-shrink-0" />
                {rule}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default GrammarTable;
