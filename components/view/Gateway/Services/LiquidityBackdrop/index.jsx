/**
 * Animated backdrop for the settlement section ("مدیریت جریان نقدینگی با تسویه
 * آنی").
 *
 * The section's subject is cash flow, so the motion is fluid rather than
 * technical: two rakes of soft light drift across at different speeds, and a
 * broad glow behind the copy breathes on a slow cycle, standing in for the
 * recurring payout. Deliberately shares no vocabulary with the hero backdrop —
 * no ledger grid, no scan, no coins — so the two sections don't read as the
 * same effect twice.
 *
 * Each drifting rake is a repeating gradient of vertical bands inside a rotated
 * wrapper: the wrapper owns the tilt and the inner layer owns the travel, so
 * the two transforms never fight. The travel distance equals exactly one period
 * of the band pattern, which is what makes the loop seamless — bands are always
 * a full period out when the animation restarts, so nothing visibly jumps.
 */

// Band pattern periods, in px. These must match the travel distances in the
// currentDrift / currentDriftFar keyframes or the loop will stutter.
const NEAR_BANDS =
  "repeating-linear-gradient(to right, transparent 0 130px, rgba(255,255,255,0.10) 130px 196px, transparent 196px 320px)";
const FAR_BANDS =
  "repeating-linear-gradient(to right, transparent 0 200px, rgba(255,255,255,0.07) 200px 296px, transparent 296px 480px)";

function LiquidityBackdrop() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {/* Far rake: wider, fainter, slower — reads as depth behind the near one. */}
      <div className="absolute -inset-y-1/2 -left-1/2 w-[200%] -rotate-[14deg]">
        <div
          className="h-full w-full animate-current-drift-far motion-reduce:animate-none"
          style={{ backgroundImage: FAR_BANDS }}
        />
      </div>

      <div className="absolute -inset-y-1/2 -left-1/2 w-[200%] -rotate-[9deg]">
        <div
          className="h-full w-full animate-current-drift motion-reduce:animate-none"
          style={{ backgroundImage: NEAR_BANDS }}
        />
      </div>

      {/* The payout cycle, behind the copy. Sized and placed with insets rather
          than a centring translate, since the swell animates `transform`. */}
      <div
        className="absolute right-0 top-[10%] h-[80%] w-[70%] lg:w-[45%] animate-liquidity-swell motion-reduce:animate-none"
        style={{
          background:
            "radial-gradient(closest-side, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0.16) 45%, rgba(255,255,255,0) 75%)",
        }}
      />
    </div>
  );
}

export default LiquidityBackdrop;
