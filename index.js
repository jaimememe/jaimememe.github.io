// Para agregar un proyecto nuevo, añade un objeto a esta lista.
const proyectos = [
    {
        titulo: "Agente IA en Java Swing",
        descripcion: "Chatbot de escritorio con un LLM que lee y escribe archivos en una carpeta de Linux, con varios agentes configurables. Proyecto de Programación 2.",
        enlace: "proyectos/java_swings/index.html",
        icono: "☕",
        color: "#f89820",
        tags: ["Java", "Swing", "IA", "Pro 2"],
    },
];

const contenedor = document.getElementById("proyectos");
const filtros = document.getElementById("filtros");

function crearCard(p) {
    const a = document.createElement("a");
    a.className = "card";
    a.href = p.enlace;
    a.style.setProperty("--color", p.color);
    a.innerHTML = `
        <div class="icono">${p.icono}</div>
        <h2>${p.titulo}</h2>
        <p>${p.descripcion}</p>
        <div class="tags">${p.tags.map(t => `<span>${t}</span>`).join("")}</div>
        <span class="ver">Ver proyecto →</span>
    `;
    return a;
}

function mostrar(tag) {
    contenedor.innerHTML = "";
    const lista = tag === "Todos" ? proyectos : proyectos.filter(p => p.tags.includes(tag));
    lista.forEach((p, i) => {
        const card = crearCard(p);
        contenedor.appendChild(card);
        setTimeout(() => card.classList.add("visible"), 80 * i);
    });
}

function crearFiltros() {
    const tags = ["Todos", ...new Set(proyectos.flatMap(p => p.tags))];
    tags.forEach(tag => {
        const b = document.createElement("button");
        b.textContent = tag;
        if (tag === "Todos") b.classList.add("activo");
        b.addEventListener("click", () => {
            filtros.querySelectorAll("button").forEach(x => x.classList.remove("activo"));
            b.classList.add("activo");
            mostrar(tag);
        });
        filtros.appendChild(b);
    });
}

document.getElementById("anio").textContent = new Date().getFullYear();
crearFiltros();
mostrar("Todos");
