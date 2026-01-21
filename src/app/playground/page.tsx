import { Button } from "@/components/ui/button"

export default function PlaygroundPage() {
  return (
    <div className="container mx-auto flex flex-col items-center justify-center gap-8 px-4 py-16">
      <h1 className="text-4xl font-bold tracking-tight">
        Codify Playground
      </h1>
      
      <div className="flex flex-col items-center gap-4">
        <p className="text-muted-foreground">
          Prueba los componentes de shadcn/ui
        </p>
        
        <div className="flex flex-wrap justify-center gap-4">
          <Button>Default Button</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="destructive">Destructive</Button>
        </div>
      </div>

      <p className="text-sm text-muted-foreground">
        Usa el toggle en la navbar para cambiar el tema
      </p>
    </div>
  )
}
