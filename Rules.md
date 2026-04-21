# Hex Chess — Rules

## The Board

- 9 × 7 ABAB offset hexagonal grid
- Each hex has 6 adjacent neighbors along its edges
- Player 1 starts at the bottom, Player 2 at the top
- Back row: Lancer (L) and Ninja (N)
- Front row: alternating Matter (M+) and Antimatter (A−) pawns

---

## Win Condition

Last player with at least one piece on the board wins. If both players' final pieces are eliminated simultaneously, the game is a draw.

---

## Turn Structure

Each turn, the active player selects one piece and takes one action:

1. **Move** the piece to a valid destination, then optionally use an ability
2. **Or** use an ability without moving (e.g. Lancer fires its ray in place)

Abilities requiring adjacency (mark, defuse, detonate, borrow) are resolved after the piece's final position.

---

## Pieces

### Matter Pawn (M+) and Antimatter Pawn (A−)

**Movement:** One step in any direction.

**Mark:** Mark any adjacent enemy piece. The mark is visible to both players.

**Detonate:** If an adjacent piece is already marked, the opposite pawn type can detonate it:
- The marked piece is destroyed
- The detonating pawn is destroyed
- Any piece adjacent to the explosion that is already marked also explodes
- Chain reactions cascade until no more marked pieces are in blast range
- Friendly marked pieces caught in a chain also explode

**Defuse:** Move adjacent to one of your own marked pieces to remove its mark. Adjacency to the marked piece is required, not to the marking pawn.

**Key rules:**
- Marking, defusing, and detonating all require adjacency
- Chain reactions only trigger on pre-marked pieces — unmarked pieces in the blast radius are safe

---

### Lancer (L)

**Launch (movement):** Slides in a straight line along any hex edge direction and cannot stop freely — it must land on another piece:
- Hits a **friendly piece** → stops one step before it
- Hits an **enemy piece** → destroys the enemy and destroys itself
- **Nothing stops it** → flies off the board and is destroyed

Launching is always a commitment.

**Immobilize Ray (action):** Instead of moving, fires a ray in any straight line. The first enemy piece in the line of sight is immobilized for one full turn — it cannot move, mark, defuse, detonate, launch, or fire. The Lancer does not move when firing.

**Immobilization notes:**
- The freeze lifts automatically at the start of the immobilized player's next turn
- An immobilized piece can still be marked, defused, or caught in a chain reaction

---

### Rogue Ninja (N)

**Movement:** Up to 6 steps per turn. The Ninja:
- Can change direction freely between each step
- Can jump over any piece (friendly or enemy) mid-path
- Chooses when to stop within its step budget

**Borrowed Power:** After stopping, the Ninja selects one adjacent piece — friendly or enemy — and immediately executes that piece's ability as if it were its own:
- Adjacent Matter pawn → mark an adjacent enemy
- Adjacent Antimatter pawn → detonate a marked adjacent piece
- Adjacent Lancer → fire an immobilize ray at full range along a clear sight line
- Adjacent enemy pawn → borrow and use against that pawn's own side

**Shadow rules:**
- The original piece is completely unaffected
- The Ninja cannot borrow from another Ninja

---

## Pawn Promotion

When a pawn reaches any hex on the opponent's back row, the controlling player immediately chooses:

1. **Promote to Ninja** — gain a mobile shadow striker
2. **Promote to Lancer** — gain a kamikaze missile or immobilize ray
3. **Spawn a new Pawn** — the promoting pawn and a brand-new pawn (player's choice of Matter or Antimatter) both return to the player's own back row. Net gain: one extra pawn. Neither pawn stays at the opponent's back row.

Note: A Lancer can never reach the opponent's back row under its own movement — it cannot stop freely and will self-destruct or fly off before arriving.

**Marks on promotion:** Any mark the promoting pawn carried is cleared upon promotion. The new piece — whether Ninja, Lancer, or fresh pawn — always enters unmarked.

---

## Strategic Notes

- Every piece is precious — there are no expendable units
- Chain reactions are double-edged — cascading detonations can wipe your own marked pieces
- The Lancer is a surgical or desperation weapon, not an early-game piece
- The Ninja's power scales with board density — more adjacent pieces means more borrowed options
- Defusing is critical — letting marks accumulate is how you lose
- Pawn races to the back row create a mid-game objective independent of direct combat
