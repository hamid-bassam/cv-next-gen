import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "@/components/ui/navigation-menu";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="border-b border-border">
        <NavigationMenu className="container mx-auto flex items-center justify-between py-4">
          <h1 className="text-lg font-bold text-primary-foreground">Hbal Trbah</h1>
          <NavigationMenuList className="flex space-x-4">
            <NavigationMenuItem>
              <a href="#" className="text-muted-foreground hover:text-foreground">Accueil</a>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <a href="#" className="text-muted-foreground hover:text-foreground">Blog</a>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <a href="#" className="text-muted-foreground hover:text-foreground">Contact</a>
            </NavigationMenuItem>
          </NavigationMenuList>
          <Button className="bg-primary text-primary-foreground">Rejoindre l’aventure</Button>
        </NavigationMenu>
      </header>

      {/* Hero Section */}
      <section className="flex-1 bg-popover text-popover-foreground py-16 text-center">
        <h2 className="text-4xl font-bold">Hbal Trbah – Du zéro à 1 million</h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Suivez mes étapes quotidiennes, découvrez des idées pratiques et inspirez-vous pour avancer.
        </p>
        <form className="mt-8 max-w-md mx-auto flex space-x-2">
          <Input type="email" placeholder="Entrez votre email" className="flex-1" />
          <Button type="submit" className="bg-primary text-primary-foreground">Rejoignez l’aventure</Button>
        </form>
      </section>

      {/* Blog Section */}
      <section className="py-16 container mx-auto">
        <h3 className="text-2xl font-bold text-foreground text-center">Derniers Articles</h3>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="bg-card">
            <CardHeader>
              <CardTitle className="text-lg font-bold text-card-foreground">
                Douche froide : Booster votre discipline et votre énergie
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Découvrez pourquoi j’intègre les douches froides dans ma routine quotidienne.
              </p>
              <Button
                variant="link"
                className="mt-4 text-primary hover:text-primary-foreground"
                asChild
              >
                <a href="https://bassams.fr/blog/cold-shower" target="_blank">Lire l'article →</a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted text-muted-foreground py-4 text-center">
        <p>© 2024 Hbal Trbah. Tous droits réservés.</p>
        <div className="mt-2 flex justify-center space-x-4">
          <a href="https://instagram.com" className="hover:text-foreground">Instagram</a>
          <a href="https://tiktok.com" className="hover:text-foreground">TikTok</a>
          <a href="https://linkedin.com" className="hover:text-foreground">LinkedIn</a>
        </div>
      </footer>
    </div>
  );
}
