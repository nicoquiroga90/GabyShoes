import { SectionContainer } from "@components/Section";
import Link from "next/link";
import Image from "next/image";
import { ButtonGroup } from "@components/Button";
import { Icon } from "@iconify/react";

const DATA = [
    {
        title: "Comodidad & Estilo",
        items: [
            {
                label: "Calzados",
                href: "#calzados"
            },
            {
                label: "Testimonios",
                href: "#testimonios"
            },
            {
                label: "Consultas Frecuentes",
                href: "#consultas"
            }
        ]
    },
    {
        title: "Nuestra Empresa",
        items: [
            {
                label: "Sobre nosotros",
                href: "https://google.com",
                target: "_blank",
                rel: "noopener noreferrer"
            },
            {
                label: "Twitter",
                href: "https://x.com",
                target: "_blank",
                rel: "noopener noreferrer"
            },
            {
                label: "Instagram",
                href: "https://instagram.com",
                target: "_blank",
                rel: "noopener noreferrer"
            },
            {
                label: "Facebook",
                href: "https://facebook.com",
                target: "_blank",
                rel: "noopener noreferrer"
            }
        ]
    }
];

export const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();

    return (
        <footer id="footer" className="bg-white">
            {/* Footer Links */}
            <SectionContainer className="footer--container wrap wrap-px relative z-10">
                <div className="footer--content-container py-16">
                    <div className="footer-links mb-12 grid grid-cols-2 gap-8 md:mb-16 md:grid-cols-8 lg:grid-cols-12">
                        <div className="col-span-6">
                            <div className="footer--logo grid gap-8">
                                <Link href="/">
                                    <Image
                                        src="/Gaby.png"
                                        alt="logo"
                                        className="h-10 w-auto"
                                        height="25"
                                        width="100"
                                        priority
                                    />
                                </Link>
                                <ButtonGroup alignment="left">
                                    <a
                                        role="button"
                                        href="https://wa.me/5491151638271?text=Hola,%20me%20interesa%20más%20información%20sobre%20tu%20producto."
                                        className="btn btn--secondary"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Hace tu pedido
                                        <Icon icon="material-symbols:arrow-forward-rounded" />
                                    </a>
                                </ButtonGroup>
                            </div>
                        </div>
                        <div className="col-span-6">
                            <div className="footer-menu grid grid-cols-2 md:grid-cols-8 lg:grid-cols-12">
                                {DATA.map((footerLinks) => (
                                    <div
                                        key={footerLinks.title}
                                        className="footer-menu--container col-span-1 md:col-span-4"
                                    >
                                        <h3 className="font-bold text-base mb-2">
                                            {footerLinks.title}
                                        </h3>
                                        <ul className="footer-menu--list">
                                            {footerLinks.items.map(
                                                (footerItem) => (
                                                    <li
                                                        key={footerItem.label}
                                                        className="footer-menu--list-item gap-2"
                                                    >
                                                        <a
                                                            className="mb-2 block w-auto font-medium transition-colors duration-300 hover:underline"
                                                            href={
                                                                footerItem.href
                                                            }
                                                            target={
                                                                footerItem.target
                                                            }
                                                            rel={
                                                                footerItem.target === "_blank"
                                                                    ? "noopener noreferrer"
                                                                    : undefined
                                                            }
                                                        >
                                                            {footerItem.label}
                                                        </a>
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </SectionContainer>
            {/* Footer Credits */}
            <SectionContainer className="footer-credits relative z-10">
                <div className="wrap wrap-px py-6">
                    <p className="my-0">
                        © {year} All rights reserved{" - "}
                        <span className="font-normal">
                            by{" "}
                            <Link
                                className="transition-colors duration-300 hover:underline"
                                href="https://nico-quiroga.vercel.app/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                NicoQ.
                            </Link>
                        </span>
                    </p>
                </div>
            </SectionContainer>
            <div className="footer--background"></div>
        </footer>
    );
};
