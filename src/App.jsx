import React from "react";
import {
  BadgeCheck,
  CircleDollarSign,
  Clock3,
  FileCheck2,
  LockKeyhole,
  Printer,
  Scissors,
  ShieldCheck,
  ShoppingCart,
  Sparkles,
  Star,
  Trophy,
} from "lucide-react";

import heroImage from "./assets/kit-hero.png";
import previewImage from "./assets/preview-sheet.png";
import compareDepay from "./assets/real-photos/compare-depay.jpg";
import compareLeNormand from "./assets/real-photos/compare-le-normand.jpg";
import compareMbappe from "./assets/real-photos/compare-mbappe.jpg";
import packetsTable from "./assets/real-photos/packets-table.jpg";
import printGuide from "./assets/real-photos/print-guide.jpg";
import stickerVariety from "./assets/real-photos/sticker-variety.jpg";
import { CHECKOUT_URL, OFFER_PRICE, OLD_PRICE } from "./offer.mjs";

const benefits = [
  {
    icon: Trophy,
    title: "Album tematico completo",
    text: "Tudo pronto para transformar folhas impressas em colecao.",
  },
  {
    icon: CircleDollarSign,
    title: "Sem depender de sorte",
    text: "Voce compra o arquivo uma vez e imprime sem esperar vir a figurinha certa.",
  },
  {
    icon: Printer,
    title: "Imprima para sempre",
    text: "Perdeu, rasgou ou quer repetir uma pagina? Abra o PDF e imprima de novo.",
  },
  {
    icon: FileCheck2,
    title: "Arquivo pronto em PDF",
    text: "Formato simples para abrir no celular, computador ou papelaria.",
  },
  {
    icon: Scissors,
    title: "Recorte facil",
    text: "Grid visual pensado para imprimir, recortar e colar com capricho.",
  },
  {
    icon: Clock3,
    title: "Entrega na hora",
    text: "Depois do pagamento, o checkout libera o acesso digital no email.",
  },
];

const pains = [
  {
    title: "Pacotinho que pesa no bolso",
    text: "Voce compra de novo e ainda corre o risco de vir so figurinha repetida.",
  },
  {
    title: "Crianca frustrada",
    text: "A expectativa vira decepcao quando os espacos nunca preenchem.",
  },
  {
    title: "Album que nao fecha",
    text: "Comprar, trocar, procurar... e a colecao continua travada.",
  },
  {
    title: "Sorte mandando no jogo",
    text: "Em vez de brincar hoje, voce depende de banca, estoque e acaso.",
  },
];

const proofPhotos = [
  {
    image: compareMbappe,
    title: "Comparativo em mesa",
    text: "Foto enviada mostrando a figurinha impressa ao lado da original.",
  },
  {
    image: compareLeNormand,
    title: "Corte e tamanho",
    text: "Bom para mostrar proporcao, acabamento e leitura do material.",
  },
  {
    image: compareDepay,
    title: "Acabamento de perto",
    text: "Detalhe visual para reforcar que o PDF imprime com boa presenca.",
  },
];

const trustBadges = [
  {
    icon: Clock3,
    title: "Entrega na hora no email",
    text: "Receba o acesso digital apos o pagamento.",
  },
  {
    icon: Printer,
    title: "Imprima para sempre",
    text: "Use o arquivo sempre que quiser repetir paginas.",
  },
  {
    icon: ShieldCheck,
    title: "PIX ou cartao",
    text: "Compra segura pelo checkout da Cakto.",
  },
];

const urgencyReasons = [
  {
    icon: CircleDollarSign,
    title: "Economia imediata",
    text: "O valor do kit custa menos que poucas idas comprando pacote fisico.",
  },
  {
    icon: Clock3,
    title: "Comeca hoje",
    text: "A compra libera o material digital para baixar, imprimir e montar no mesmo dia.",
  },
  {
    icon: FileCheck2,
    title: "Sem arrependimento por repetidas",
    text: "Voce sabe exatamente o que esta comprando antes de clicar no botao.",
  },
];

const faqs = [
  {
    question: "Como vou receber o kit?",
    answer:
      "O produto e digital. A entrega acontece pelo checkout configurado para liberar o arquivo depois da confirmacao do pagamento.",
  },
  {
    question: "Preciso de uma impressora especial?",
    answer:
      "Nao. Voce pode imprimir em casa ou em uma papelaria. Para melhor resultado, use papel com boa gramatura e impressao colorida.",
  },
  {
    question: "Posso imprimir mais de uma vez?",
    answer:
      "Sim. A proposta e pagar uma vez pelo arquivo digital e imprimir novamente quando precisar.",
  },
  {
    question: "Esse produto e oficial?",
    answer:
      "Nao. E uma pagina de venda independente. Marcas, nomes e imagens exibidos em fotos demonstrativas pertencem aos seus respectivos titulares.",
  },
];

function CheckoutButton({ children, compact = false }) {
  return (
    <a
      className={compact ? "cta cta-compact" : "cta"}
      href={CHECKOUT_URL}
      data-checkout-link
      aria-label="Comprar kit digital de figurinhas"
    >
      <ShoppingCart aria-hidden="true" size={compact ? 18 : 20} />
      <span>{children}</span>
    </a>
  );
}

function IconLine({ icon: Icon, title, text }) {
  return (
    <article className="benefit-card">
      <div className="icon-box">
        <Icon aria-hidden="true" size={22} />
      </div>
      <div>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </article>
  );
}

export function App() {
  return (
    <>
      <div className="top-strip">
        <span>Promocao de lancamento</span>
        <strong>De {OLD_PRICE} por apenas {OFFER_PRICE}</strong>
      </div>

      <main>
        <section className="hero" id="topo">
          <div className="hero-content">
            <p className="eyebrow">
              <Sparkles aria-hidden="true" size={16} />
              Kit digital para imprimir
            </p>
            <h1>
              Complete sua colecao 2026 sem gastar uma fortuna
            </h1>
            <p className="hero-copy">
              Baixe o PDF com figurinhas de futebol, imprima quantas vezes quiser
              e pare de perder dinheiro com pacotinhos repetidos.
            </p>
            <div className="hero-actions">
              <CheckoutButton>QUERO MEU KIT POR R$14,90</CheckoutButton>
              <p>
                <LockKeyhole aria-hidden="true" size={15} />
                PIX ou cartao, entrega digital e acesso imediato pelo checkout
              </p>
            </div>
            <div className="hero-trust">
              {trustBadges.map(({ icon: Icon, title, text }) => (
                <div className="trust-pill" key={title}>
                  <Icon aria-hidden="true" size={18} />
                  <div>
                    <strong>{title}</strong>
                    <span>{text}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-media" aria-label="Mockup do kit digital">
            <img src={heroImage} alt="Mockup de album e folhas de figurinhas de futebol para imprimir" />
          </div>
        </section>

        <section className="pain-section">
          <div className="section-inner">
            <div className="section-heading">
              <p className="eyebrow">O problema que todo colecionador conhece</p>
              <h2>Cansado de gastar e o album nao fechar?</h2>
              <p>
                Se voce ja tentou completar uma colecao comprando pacotinho, essa
                historia parece familiar.
              </p>
            </div>
            <div className="pain-list">
              {pains.map((pain) => (
                <div className="pain-item" key={pain.title}>
                  <BadgeCheck aria-hidden="true" size={20} />
                  <div>
                    <strong>{pain.title}</strong>
                    <span>{pain.text}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="section-cta">
              <CheckoutButton>QUERO PARAR DE GASTAR COM REPETIDAS</CheckoutButton>
            </div>
          </div>
        </section>

        <section className="solution-section">
          <div className="section-inner split">
            <div>
              <p className="eyebrow">A solucao</p>
              <h2>Receba o arquivo, imprima e monte no seu ritmo</h2>
              <p>
                Voce recebe um material digital simples de usar, com paginas
                coloridas e visual caprichado para montar a brincadeira hoje,
                sem esperar pela sorte do proximo pacote.
              </p>
              <ul className="check-list">
                <li>Material em PDF com paginas prontas para impressao.</li>
                <li>Comparativos reais para mostrar tamanho, corte e acabamento.</li>
                <li>Preco promocional destacado em todas as chamadas.</li>
              </ul>
            </div>
            <img
              className="preview-image"
              src={previewImage}
              alt="Folha de figurinhas de futebol sendo preparada para impressao"
            />
          </div>
        </section>

        <section className="real-proof-section" id="resultado-real">
          <div className="section-inner">
            <div className="section-heading">
              <p className="eyebrow">Resultado real</p>
              <h2>Veja o PDF impresso comparado com a figurinha original</h2>
              <p>
                As fotos entram aqui porque elas vendem o ponto mais importante:
                o comprador consegue visualizar tamanho, cores e acabamento antes
                de clicar no checkout.
              </p>
            </div>
            <div className="proof-grid">
              {proofPhotos.map((photo) => (
                <article className="proof-card" key={photo.title}>
                  <img src={photo.image} alt={photo.title} data-real-photo />
                  <div>
                    <h3>{photo.title}</h3>
                    <p>{photo.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="benefits-section">
          <div className="section-inner">
            <div className="section-heading">
              <p className="eyebrow">O que vem no kit</p>
              <h2>Pratico para imprimir, recortar e colecionar</h2>
            </div>
            <div className="benefit-grid">
              {benefits.map((benefit) => (
                <IconLine key={benefit.title} {...benefit} />
              ))}
            </div>
          </div>
        </section>

        <section className="kit-preview-section" id="previa-kit">
          <div className="section-inner split">
            <div>
              <p className="eyebrow">Previa do kit</p>
              <h2>Variedade visual para deixar a oferta mais concreta</h2>
              <p>
                Esta parte mostra volume: pacotinhos, figurinhas e pagina de
                album. Ela fica antes da oferta para aumentar a confianca no que
                a pessoa esta comprando.
              </p>
              <ul className="check-list">
                <li>Mostra que o produto nao e apenas uma imagem isolada.</li>
                <li>Ajuda o comprador a imaginar o material impresso em casa.</li>
                <li>Reforca a economia frente aos pacotes fisicos.</li>
              </ul>
            </div>
            <div className="kit-photo-stack">
              <img
                className="wide-photo"
                src={packetsTable}
                alt="Mesa com pacotes e figurinhas de futebol"
                data-real-photo
              />
              <img
                className="wide-photo inset-photo"
                src={stickerVariety}
                alt="Colagem com varias figurinhas e previa de album"
                data-real-photo
              />
            </div>
          </div>
        </section>

        <section className="urgency-section">
          <div className="section-inner">
            <div className="section-heading">
              <p className="eyebrow">Decisao simples</p>
              <h2>Por que comprar agora?</h2>
              <p>
                Porque o visitante precisa perceber rapidamente que o kit resolve
                a dor, economiza dinheiro e entrega a brincadeira no mesmo dia.
              </p>
            </div>
            <div className="urgency-grid">
              {urgencyReasons.map(({ icon: Icon, title, text }) => (
                <article className="urgency-card" key={title}>
                  <div className="icon-box">
                    <Icon aria-hidden="true" size={22} />
                  </div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
            <div className="section-cta">
              <CheckoutButton>SIM, QUERO MEU KIT AGORA POR {OFFER_PRICE}</CheckoutButton>
            </div>
          </div>
        </section>

        <section className="offer-section" id="checkout-pendente">
          <div className="offer-panel">
            <p className="eyebrow">Oferta especial</p>
            <h2>Kit Figurinhas Futebol 2026</h2>
            <ul className="offer-list">
              <li>PDF digital com folhas de figurinhas ilustradas.</li>
              <li>Paginas com visual de album para montar a colecao.</li>
              <li>Entrega na hora no email depois da confirmacao.</li>
              <li>Voce pode imprimir para sempre quando precisar.</li>
              <li>Pagina e produto digital independente, sem vinculo oficial.</li>
            </ul>
            <div className="price-box">
              <span>De {OLD_PRICE}</span>
              <strong>{OFFER_PRICE}</strong>
              <small>Pagamento unico</small>
            </div>
            <CheckoutButton>QUERO MEU KIT POR R$14,90</CheckoutButton>
            <p className="secure-line">
              <ShieldCheck aria-hidden="true" size={16} />
              Compra via Cakto, com PIX, cartao e entrega digital
            </p>
          </div>
        </section>

        <section className="print-guide-section" id="guia-impressao">
          <div className="section-inner split guide-layout">
            <img
              className="guide-image"
              src={printGuide}
              alt="Guia de impressao e montagem das figurinhas"
              data-real-photo
            />
            <div>
              <p className="eyebrow">Guia incluso</p>
              <h2>O comprador tambem entende como imprimir e montar</h2>
              <p>
                Esta imagem entra perto da garantia porque reduz duvidas comuns:
                tamanho do papel, escala de impressao, qualidade e corte.
              </p>
              <ul className="check-list">
                <li>Ajuda quem nao sabe configurar a impressora.</li>
                <li>Mostra recomendacao de papel e acabamento.</li>
                <li>Diminui perguntas depois da compra.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="guarantee-section">
          <div className="section-inner guarantee-band">
            <ShieldCheck aria-hidden="true" size={42} />
            <div>
              <h2>Compra clara, entrega digital e produto independente</h2>
              <p>
                A comunicacao deixa evidente que o kit nao e oficial e que o
                comprador recebe um arquivo digital para imprimir.
              </p>
            </div>
          </div>
        </section>

        <section className="faq-section">
          <div className="section-inner narrow">
            <div className="section-heading">
              <p className="eyebrow">Duvidas comuns</p>
              <h2>Perguntas frequentes</h2>
            </div>
            <div className="faq-list">
              {faqs.map((faq, index) => (
                <details key={faq.question} open={index === 0}>
                  <summary>{faq.question}</summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="final-section">
          <div className="section-inner narrow">
            <Star aria-hidden="true" size={38} />
            <h2>Garanta o kit digital pelo preco promocional</h2>
            <p>
              Receba o arquivo, imprima as paginas e comece a montar a colecao
              hoje sem depender de sorte, troca ou pacotinho repetido.
            </p>
            <CheckoutButton>QUERO MEU KIT POR R$14,90</CheckoutButton>
          </div>
        </section>
      </main>

      <footer>
        <div className="section-inner">
          <p>Kit digital independente de figurinhas tematicas de futebol.</p>
          <p>Sem vinculo oficial com marcas, editoras, entidades esportivas ou torneios registrados.</p>
        </div>
      </footer>

      <div className="sticky-cta" aria-label="Atalho para comprar">
        <CheckoutButton compact>COMPRAR POR {OFFER_PRICE}</CheckoutButton>
      </div>
    </>
  );
}
