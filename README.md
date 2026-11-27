# random-emcee-col

Consulta los participantes de Red Bull Batalla por competencia y año.

El catálogo incluye las ediciones 2021–2026 de Colombia y la Final Internacional.
La edición internacional de 2025 corresponde al evento especial *Nueva Historia*.

## Uso

```bash
npm test
node bin/global.js
node bin/global.js --year 2022
node bin/international.js 2024
```

Sin indicar un año, el programa permite seleccionarlo de forma interactiva.
También se puede usar `--year <año>` o pasar el año como argumento. Cada
comando muestra la lista completa de participantes de esa edición.

Al instalar el paquete globalmente, están disponibles `random-emcee-col` y
`random-emcee-internacional`.

## Fuentes

Las listas se basan en participantes publicados por Red Bull Batalla:

- Colombia 2021: [Final Nacional](https://www.redbull.com/es-es/marithea-campeona-colombia-2021)
- Colombia 2022: [Participantes](https://www.redbull.com/int-es/events/red-bull-batalla-final-nacional-colombia-2022/participantes-colombia-2022)
- Colombia 2023: [Clasificados](https://www.redbull.com/int-es/clasificados-red-bull-batalla-colombia-2023)
- Colombia 2024: [Participantes](https://www.redbull.com/es-es/events/red-bull-batalla-national-final-colombia-2024/participantes-colombia-2024)
- Colombia 2025: [Final Nacional](https://www.redbull.com/es-es/events/red-bull-batalla-final-nacional-colombia-2025)
- Colombia 2026: [Final Nacional](https://www.redbull.com/co-es/red-bull-batalla-colombia-todo-sobre-la-final-nacional-2026)
- Internacional 2021: [Participantes](https://www.redbull.com/do-es/events/red-bull-batalla-final-internacional-2021-chile/participantes-final-internacional-2021)
- Internacional 2022: [Participantes](https://www.redbull.com/es-es/quienes-participantes-final-internacional-2022)
- Internacional 2023: [Participantes](https://www.redbull.com/int-es/events/batalla-final-internacional-colombia-2023/participantes-final-internacional-colombia-23)
- Internacional 2024: [Clasificados](https://www.redbull.com/es-es/events/final-internacional-red-bull-batalla/final-internacional-red-bull-batalla-2024-clasificados)
- Internacional 2025: [Nueva Historia](https://www.redbull.com/int-es/events/red-bull-batalla-nueva-historia/participantes-nueva-historia)
- Internacional 2026: [Final Internacional](https://www.redbull.com/int-es/el-menor-campeon-final-internacional-batalla-2026)
