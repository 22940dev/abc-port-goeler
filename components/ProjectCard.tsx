type Props = {
    title: string
    description: string
    href: string
    icon?: "musicmash"
}

export default function ProjectCard({ title, description, href, icon }: Props) {
    return (
        <a
            className="mb-4 hover:shadow-lg transition-all duration-100 ease-in no-underline"
            href={href}
            aria-label={title}
            target="_blank"
            rel="noopener noreferrer"
        >
            <div className="flex items-center border border-gray-300 dark:border-gray-700 rounded p-4">
                {icon === "musicmash" && (
                    <div className="h-8 w-8 ml-2 mr-4">
                        <span className="sr-only">Music Mash</span>
                        {/* <svg
                            className="h-8 w-8 min-w-sm text-gray-900 dark:text-gray-100"
                            viewBox="0 0 267 305"
                        >
                            <g fill="currentColor">
                                <path d="M0 296V8.5H231.5V89L170.5 150L258.5 238H174L86 150L170.5 65.5H58V238L0 296Z" />
                            </g>
                        </svg> */}
                        <svg
                            className="h-8 w-8 min-w-sm text-gray-900 dark:text-gray-100"
                            viewBox="0 0 400.000000 400.000000"
                        >
                            <g
                                transform="translate(0.000000,400.000000) scale(0.100000,-0.100000)"
                                fill="currentColor"
                                stroke="none"
                            >
                                <path
                                    d={`M1765 3984 c-145 -18 -168 -23 -390 -84 -50 -13 -81 -26 -256 -108
                                        -228 -106 -492 -314 -660 -519 -191 -232 -349 -547 -407 -810 -44 -197 -52
                                        -266 -52 -434 0 -248 43 -517 110 -684 4 -11 18 -47 31 -80 83 -219 260 -491
                                        433 -667 120 -122 387 -320 501 -372 22 -10 72 -33 110 -51 130 -59 166 -72
                                        348 -119 193 -50 454 -68 652 -46 195 22 411 73 530 125 150 65 201 90 301
                                        145 44 24 193 132 271 195 204 168 385 400 505 645 84 171 126 298 173 515 17
                                        75 35 248 35 328 0 195 -43 471 -102 652 -11 33 -23 69 -28 80 -5 11 -17 40
                                        -27 65 -25 63 -113 234 -154 300 -34 56 -133 192 -179 245 -30 35 -164 169
                                        -208 207 -112 98 -310 230 -417 278 -27 12 -79 36 -115 52 -276 127 -681 185
                                        -1005 142z m883 -886 c62 -15 98 -41 133 -96 73 -115 6 -269 -132 -300 -28 -7
                                        -120 -12 -205 -12 l-154 0 0 -677 c0 -657 -1 -678 -21 -735 -11 -31 -32 -79
                                        -47 -105 -40 -72 -147 -173 -222 -210 -85 -41 -90 -42 -189 -57 -140 -21 -273
                                        11 -397 95 -149 100 -224 241 -224 420 0 177 77 314 238 422 140 94 277 114
                                        490 71 l32 -6 0 525 c0 571 -1 564 57 619 53 51 86 57 351 57 152 1 261 -3
                                    290 -11z`}
                                />
                            </g>
                        </svg>
                    </div>
                )}
                <div>
                    <h4 className="text-lg font-bold tracking-tight text-gray-900 dark:text-gray-100 no-underline">
                        {title}
                    </h4>
                    <p className="leading-5 text-gray-700 dark:text-gray-300">{description}</p>
                </div>
            </div>
        </a>
    )
}
