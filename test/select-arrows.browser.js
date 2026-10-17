// Browser regression: run against real Host base CSS + the98 CSS, not a mock
// cascade. The character preview harness serves this as /__preview__/select-arrows.js.
export function checkSelectArrows() {
    const fixture = document.createElement("fieldset")
    fixture.innerHTML = `
        <legend>Select arrow regression</legend>
        <select aria-label="Standalone regression select"><option>Standalone</option></select>
        <table><thead><tr><th>Select</th></tr></thead><tbody><tr><td>
            <select aria-label="Table regression select"><option>Table cell</option></select>
        </td></tr></tbody></table>
    `
    const previousFocus = document.activeElement
    document.body.append(fixture)
    const results = []
    try {
        for (const select of fixture.querySelectorAll("select")) {
            let normalImage = null
            for (const state of ["normal", "focus", "active", "focus-active", "disabled"]) {
                select.blur()
                select.disabled = state === "disabled"
                select.classList.toggle("active", state.includes("active"))
                if (state.includes("focus")) select.focus()
                const style = getComputedStyle(select)
                const snapshot = {
                    select: select.getAttribute("aria-label"), state,
                    image: style.backgroundImage, repeat: style.backgroundRepeat,
                    x: style.backgroundPositionX, y: style.backgroundPositionY,
                    paddingRight: style.paddingRight,
                }
                const fail = (message) => { throw new Error(`${snapshot.select} / ${state}: ${message}; ${JSON.stringify(snapshot)}`) }
                if (snapshot.image === "none") fail("arrow image missing")
                if (snapshot.repeat !== "no-repeat") fail("arrow must not tile")
                if (snapshot.x !== "calc(100% - 2px)" || snapshot.y !== "2px") fail("arrow must stay at top 2px right 2px")
                if (parseFloat(snapshot.paddingRight) < 32) fail("text must reserve arrow space")
                if (state === "normal") normalImage = snapshot.image
                if (state.includes("active") && snapshot.image === normalImage) fail("pressed arrow asset missing")
                results.push({ ...snapshot, image: "present" })
            }
        }
        return { passed: results.length, results }
    } finally {
        fixture.remove()
        if (previousFocus instanceof HTMLElement && previousFocus.isConnected) previousFocus.focus()
    }
}
