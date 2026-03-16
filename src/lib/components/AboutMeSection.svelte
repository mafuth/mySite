<script lang="ts">
    import { onMount, tick } from "svelte";

    let terminalContent = [
        { type: "command", text: "whoami" },
        { type: "output", text: "Mohamed Mafaaz" },
        { type: "command", text: "cat current_role.txt" },
        {
            type: "output",
            text: "Currently working at Ooredoo Maldives as a DevOps Engineer, building and deploying robust apps and backends.",
        },
        { type: "command", text: "cat bio.txt" },
        {
            type: "output",
            text: "I am a passionate Developer, Architect, and Designer with a knack for building scalable systems and elegant user experiences. My journey in tech is driven by curiosity and a love for pixel-perfect details.",
        },
        { type: "command", text: "ls skills/highlight" },
        {
            type: "output",
            text: "Full-stack Development, Cloud Architecture, UI/UX Design, System Orchestration",
        },
        { type: "command", text: "uptime" },
        {
            type: "output",
            text: "Coding since 2018. Continuous learning in progress...",
        },
    ];

    let displayedLines = $state<
        { type: string; text: string; visibleText: string }[]
    >([]);
    let currentLineIndex = $state(0);
    let currentCharIndex = $state(0);
    let istyping = $state(true);
    let userInput = $state("");
    let terminalBody = $state<HTMLElement>();
    let inputField = $state<HTMLInputElement>();

    // Command History
    let history = $state<string[]>([]);
    let historyIndex = $state(-1);

    onMount(() => {
        typeNextCharacter();
    });

    async function typeNextCharacter() {
        if (currentLineIndex >= terminalContent.length) {
            istyping = false;
            await tick();
            scrollToBottom();
            return;
        }

        const currentLine = terminalContent[currentLineIndex];

        if (displayedLines[currentLineIndex] === undefined) {
            displayedLines = [
                ...displayedLines,
                { ...currentLine, visibleText: "" },
            ];
        }

        if (currentCharIndex < currentLine.text.length) {
            // In Svelte 5, we need to trigger reactivity for object properties if they aren't $state themselves
            // or reassign the array element.
            const lines = [...displayedLines];
            lines[currentLineIndex].visibleText +=
                currentLine.text[currentCharIndex];
            displayedLines = lines;
            currentCharIndex++;

            const delay = currentLine.type === "command" ? 50 : 20;
            setTimeout(typeNextCharacter, delay);
        } else {
            currentLineIndex++;
            currentCharIndex = 0;
            setTimeout(typeNextCharacter, 500);
        }
        scrollToBottom();
    }

    function scrollToBottom() {
        if (terminalBody) {
            terminalBody.scrollTop = terminalBody.scrollHeight;
        }
    }

    function handleKeyDown(e: KeyboardEvent) {
        if (e.key === "Enter" && userInput.trim()) {
            const cmd = userInput.trim().toLowerCase();
            executeCommand(cmd);
            history = [cmd, ...history];
            historyIndex = -1;
            userInput = "";
        } else if (e.key === "ArrowUp") {
            e.preventDefault();
            if (historyIndex < history.length - 1) {
                historyIndex++;
                userInput = history[historyIndex];
            }
        } else if (e.key === "ArrowDown") {
            e.preventDefault();
            if (historyIndex > 0) {
                historyIndex--;
                userInput = history[historyIndex];
            } else if (historyIndex === 0) {
                historyIndex = -1;
                userInput = "";
            }
        }
    }

    $effect(() => {
        if (!istyping && inputField) {
            inputField.focus();
        }
    });

    function executeCommand(cmd: string) {
        displayedLines = [
            ...displayedLines,
            { type: "command", text: cmd, visibleText: cmd },
        ];

        let output = "";
        switch (cmd) {
            case "help":
                output =
                    "Available commands: whoami, role, bio, experience, ls, uptime, contact, date, clear, help";
                break;
            case "clear":
                displayedLines = [];
                return;
            case "whoami":
                output =
                    "Mohamed Mafaaz - Full Stack Developer & DevOps Engineer";
                break;
            case "role":
            case "current":
                output =
                    "DevOps Engineer at Ooredoo Maldives. Focused on building and deploying high-performance apps.";
                break;
            case "bio":
                output =
                    "Passionate Architect and Designer building scalable systems with pixel-perfect precision.";
                break;
            case "experience":
                output =
                    "• Ooredoo Maldives (Current): DevOps Engineer\n• System Architect & Full Stack Developer (Freelance)\n• 5+ Years in Digital Craftsmanship";
                break;
            case "ls":
                output =
                    "skills/  projects/  contact.txt  bio.txt  current_role.txt  kernel_logs/";
                break;
            case "uptime":
                output =
                    "Coding since 2018. Professional uptime: 100%. Status: Stable.";
                break;
            case "contact":
                output =
                    "Initialize connection at: hello@mafuth.online or via Social Grid.";
                break;
            case "date":
                output = new Date().toLocaleString();
                break;
            case "neofetch":
                output =
                    "OS: Pixel-RT v5.15\nHost: Mafaaz-Terminal\nKernel: x86_64\nShell: msh\nWM: SvelteKit 5";
                break;
            default:
                output = `Command not found: ${cmd}. Type 'help' for options.`;
        }

        // Handle multiline output
        const lines = output.split("\n");
        lines.forEach((l) => {
            displayedLines = [
                ...displayedLines,
                { type: "output", text: l, visibleText: l },
            ];
        });

        setTimeout(scrollToBottom, 10);
    }

    function focusInput() {
        if (inputField) inputField.focus();
    }

</script>

<section
    id="about"
    class="relative bg-white px-4 pt-0 pb-10 lg:px-20 overflow-hidden"
>
    <div class="relative z-10 mx-auto max-w-6xl">
        <div
            class="mb-20 text-center lg:text-left lg:flex lg:items-end lg:justify-between"
        >
            <div class="max-w-2xl">
                <h2
                    class="font-pixelify text-6xl font-black tracking-tighter text-slate-900 sm:text-8xl uppercase italic leading-none"
                >
                    System.<br /><span class="text-blue-600/20 outline-text"
                        >Profile</span
                    >
                </h2>
                <p
                    class="text-lg font-bold uppercase tracking-[0.3em] text-slate-500/80 mix-blend-multiply mt-4"
                >
                    Deep dive into the operational core.
                </p>
            </div>
            <div
                class="hidden lg:block h-px flex-1 mx-12 bg-slate-200/50 mb-4"
            ></div>
            <div class="mt-8 lg:mt-0 lg:mb-4">
                <span class="font-pixel text-xl text-slate-300"
                    >USER.DATA v1.0.4</span
                >
            </div>
        </div>

        <!-- Terminal Window -->
        <div class="terminal-container relative mx-auto w-full">
            <div
                class="terminal-window relative overflow-hidden rounded-xl bg-[#0c0c0c] border border-slate-800 transition-all duration-500 ease-out"
                onclick={focusInput}
                onkeydown={(e) => e.key === "Enter" && focusInput()}
                role="button"
                tabindex="0"
            >
                <!-- Terminal Header -->
                <div
                    class="flex items-center justify-between bg-slate-900/80 backdrop-blur-md px-6 py-4 border-b border-white/5"
                >
                    <div class="flex space-x-2">
                        <div class="h-3 w-3 rounded-full bg-[#ff5f56]"></div>
                        <div class="h-3 w-3 rounded-full bg-[#ffbd2e]"></div>
                        <div class="h-3 w-3 rounded-full bg-[#27c93f]"></div>
                    </div>
                    <div
                        class="font-pixelify text-[11px] uppercase tracking-[0.3em] text-slate-500"
                    >
                        mafaaz@terminal:~
                    </div>
                    <div class="flex items-center gap-2">
                        <div
                            class="h-1.5 w-1.5 rounded-full bg-blue-500 animate-pulse"
                        ></div>
                        <span
                            class="font-jersey text-[10px] text-blue-500/50 uppercase tracking-widest"
                            >Linked</span
                        >
                    </div>
                </div>

                <!-- Terminal Content -->
                <div
                    bind:this={terminalBody}
                    class="relative h-[500px] sm:h-[700px] overflow-y-auto p-6 sm:p-12 font-pixelify text-base leading-relaxed md:text-2xl scroll-smooth"
                >
                    <!-- CRT Effects -->
                    <div
                        class="scanlines pointer-events-none absolute inset-0 z-20"
                    ></div>
                    <div
                        class="crt-glow pointer-events-none absolute inset-0 z-10"
                    ></div>

                    <div class="relative z-0">
                        {#each displayedLines as line}
                            <div
                                class="mb-4 flex {line.type === 'command'
                                    ? 'text-blue-400'
                                    : 'text-slate-200'}"
                            >
                                {#if line.type === "command"}
                                    <span class="mr-4 shrink-0 text-slate-700"
                                        >$</span
                                    >
                                {/if}
                                <p
                                    class="wrap-break-word font-medium tracking-tight whitespace-pre-wrap"
                                >
                                    {line.visibleText}
                                </p>
                            </div>
                        {/each}

                        {#if !istyping}
                            <div class="flex items-center text-blue-400">
                                <span class="mr-4 shrink-0 text-slate-700"
                                    >$</span
                                >
                                <div
                                    class="relative flex-1 flex items-center overflow-hidden"
                                >
                                    <!-- Mirrored text for cursor positioning -->
                                    <span
                                        class="invisible whitespace-pre font-pixelify tracking-tight"
                                        >{userInput}</span
                                    >
                                    <span
                                        class="cursor-blink inline-block h-[1.2em] w-[0.6em] bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.8)] pointer-events-none"
                                    ></span>

                                    <input
                                        bind:this={inputField}
                                        bind:value={userInput}
                                        onkeydown={handleKeyDown}
                                        type="text"
                                        class="absolute inset-x-0 top-0 w-full bg-transparent border-none outline-none text-blue-400 font-pixelify caret-transparent tracking-tight p-0"
                                    />
                                </div>
                            </div>
                        {:else}
                            <div class="flex items-center text-blue-400">
                                <span class="mr-4 shrink-0 text-slate-700"
                                    >$</span
                                >
                                <span
                                    class="cursor inline-block h-[1.2em] w-[0.6em] bg-blue-500/50"
                                ></span>
                            </div>
                        {/if}
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<style>
    .outline-text {
        -webkit-text-stroke: 1px rgba(15, 23, 42, 0.1);
    }

    /* Hide scrollbar but keep functionality */
    div::-webkit-scrollbar {
        display: none;
    }
    div {
        -ms-overflow-style: none;
        scrollbar-width: none;
    }

    .terminal-window {
        backdrop-filter: blur(8px);
    }

    .scanlines {
        background: linear-gradient(
                rgba(18, 16, 16, 0) 50%,
                rgba(0, 0, 0, 0.15) 50%
            ),
            linear-gradient(
                90deg,
                rgba(255, 0, 0, 0.05),
                rgba(0, 255, 0, 0.02),
                rgba(0, 0, 255, 0.05)
            );
        background-size:
            100% 4px,
            3px 100%;
    }

    .crt-glow {
        background: radial-gradient(
            circle at center,
            transparent 60%,
            rgba(0, 0, 0, 0.45) 100%
        );
        box-shadow: inset 0 0 100px rgba(0, 0, 0, 0.6);
    }

    .cursor-blink {
        animation: blink 1s step-end infinite;
    }

    @keyframes blink {
        0%,
        100% {
            opacity: 1;
        }
        50% {
            opacity: 0;
        }
    }

    @keyframes flicker {
        0%,
        19.999%,
        22%,
        62.999%,
        64%,
        64.999%,
        70%,
        100% {
            opacity: 0.99;
        }
        20%,
        21.999%,
        63%,
        63.999%,
        65%,
        69.999% {
            opacity: 0.95;
        }
    }

    .terminal-window::before {
        content: " ";
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background: linear-gradient(
                rgba(18, 16, 16, 0.1) 50%,
                rgba(0, 0, 0, 0.25) 50%
            ),
            linear-gradient(
                90deg,
                rgba(255, 0, 0, 0.06),
                rgba(0, 255, 0, 0.02),
                rgba(0, 0, 255, 0.06)
            );
        z-index: 2;
        background-size:
            100% 2px,
            3px 100%;
        pointer-events: none;
    }

    .terminal-window::after {
        content: " ";
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background: rgba(18, 16, 16, 0.03);
        opacity: 0;
        z-index: 2;
        pointer-events: none;
        animation: flicker 0.1s infinite;
    }
</style>
