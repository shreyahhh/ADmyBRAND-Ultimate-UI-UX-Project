"use client"

import {
    animate,
    motion,
    MotionValue,
    useMotionValue,
    useMotionValueEvent,
    useScroll,
} from "framer-motion"
import { useRef } from "react"

export default function ScrollLinked() {
    const ref = useRef(null)
    const { scrollXProgress } = useScroll({ container: ref })
    const maskImage = useScrollOverflowMask(scrollXProgress)

    const platforms = [
        {
            name: "Ad8OOH",
            description: "Book Ad spaces on OOH media, Movable media, Avenues, Movie Screens, BTL Campaigns & more...",
            bgColor: "bg-red-500",
            textColor: "text-white"
        },
        {
            name: "8Digiad",
            description: "Book Ad spaces on Outdoor digital screens, LCD & LED screens at avenues, digital billboards & more...",
            bgColor: "bg-orange-500",
            textColor: "text-white"
        },
        {
            name: "Ad8Mobi",
            description: "Book Ad spaces on Mobile - Audio & Video ads, In-app, Call, SMS ads, email newsletter, App notifications & more...",
            bgColor: "bg-yellow-500",
            textColor: "text-white"
        },
        {
            name: "Ad8Paper",
            description: "Book Ad spaces in Newspapers - Display ads, Classifieds, Ads in supplements, Magazine, E-paper ads & more...",
            bgColor: "bg-green-500",
            textColor: "text-white"
        },
        {
            name: "Ad8Radio",
            description: "Book Ad spaces on Radio - Audio Ads, RJ Mentions, Contests, Sponsorship tags, Roadblocks & more...",
            bgColor: "bg-blue-500",
            textColor: "text-white"
        },
        {
            name: "Ad8TV",
            description: "Book Ad spaces on TV - FCT ads, Aston Bands, L bands, Scroll ads, Teleshopping slots, OTT ads & more...",
            bgColor: "bg-indigo-500",
            textColor: "text-white"
        },
        {
            name: "Ad8Social",
            description: "Do SEO & Book Ad spaces on Web & Social Media - Facebook, Twitter, LinkedIn, Google, Adwords & more...",
            bgColor: "bg-purple-500",
            textColor: "text-white"
        },
        {
            name: "8Hoarding",
            description: "Book Ad spaces on Outdoor media like Hoardings, Outdoor Infra, Group media & more...",
            bgColor: "bg-pink-500",
            textColor: "text-white"
        }
    ]

    return (
        <div id="example">
            <motion.ul ref={ref} style={{ maskImage }}>
                {platforms.map((platform, index) => (
                    <li key={index} className={`platform-card ${platform.bgColor}`}>
                        <h3 className={`text-2xl font-bold ${platform.textColor} mb-3`}>{platform.name}</h3>
                        <p className={`text-base ${platform.textColor} opacity-90 leading-relaxed`}>{platform.description}</p>
                    </li>
                ))}
            </motion.ul>
            <StyleSheet />
        </div>
    )
}

const left = `0%`
const right = `100%`
const leftInset = `20%`
const rightInset = `80%`
const transparent = `#0000`
const opaque = `#000`
function useScrollOverflowMask(scrollXProgress: MotionValue<number>) {
    const maskImage = useMotionValue(
        `linear-gradient(90deg, ${opaque}, ${opaque} ${left}, ${opaque} ${rightInset}, ${transparent})`
    )

    useMotionValueEvent(scrollXProgress, "change", (value) => {
        if (value === 0) {
            animate(
                maskImage,
                `linear-gradient(90deg, ${opaque}, ${opaque} ${left}, ${opaque} ${rightInset}, ${transparent})`
            )
        } else if (value === 1) {
            animate(
                maskImage,
                `linear-gradient(90deg, ${transparent}, ${opaque} ${leftInset}, ${opaque} ${right}, ${opaque})`
            )
        } else if (
            scrollXProgress.getPrevious() === 0 ||
            scrollXProgress.getPrevious() === 1
        ) {
            animate(
                maskImage,
                `linear-gradient(90deg, ${transparent}, ${opaque} ${leftInset}, ${opaque} ${rightInset}, ${transparent})`
            )
        }
    })

    return maskImage
}

/**
 * ==============   Styles   ================
 */

function StyleSheet() {
    return (
        <style>{`
            #example {
              width: 100vw;
              max-width: 1200px;
              position: relative;
            }

            #example ul {
                display: flex;
                list-style: none;
                height: 320px;
                overflow-x: scroll;
                padding: 20px 0;
                flex: 0 0 1200px;
                margin: 0 auto;
                gap: 20px;
            }

            #example ::-webkit-scrollbar {
                height: 5px;
                width: 5px;
                background: #fff3;
                -webkit-border-radius: 1ex;
            }

            #example ::-webkit-scrollbar-thumb {
                background: var(--accent);
                -webkit-border-radius: 1ex;
            }

            #example ::-webkit-scrollbar-corner {
                background: #fff3;
            }

            #example li {
                flex: 0 0 280px;
                border-radius: 8px;
                padding: 28px;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                min-height: 280px;
                text-align: center;
            }

            #example li:hover {
                transform: translateY(-2px);
                transition: transform 0.2s ease;
            }

    `}</style>
    )
} 