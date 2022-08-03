import ContentES from '../content/es/home.json';
import ContentEN from '../content/en/home.json';
import { useRouter } from 'next/router';
import Link from 'next/link'


export default function Home() {
  const { locale } = useRouter();
  const {title, subtitle} = (locale === "es") ? ContentES : ContentEN;

  return (
    <div style={{margin:"20px"}}>
      <nav>
        <Link href="/" locale="es">
          <a style={{marginRight:"10px"}}>Español</a>
        </Link>
        <Link href="/" locale="en">
          <a>Engish</a>
        </Link>
      </nav>

      <h1>{title}</h1>
      <p>{subtitle}</p>

    </div>
  )
}
