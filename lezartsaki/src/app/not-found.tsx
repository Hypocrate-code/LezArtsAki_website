import "@/app/public/ui/globals.css"
import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: "Erreur 404",
};

export default function NotFound() {
  return (
    <div>
      <h1>Outside 404</h1>
    </div>
  );
}
