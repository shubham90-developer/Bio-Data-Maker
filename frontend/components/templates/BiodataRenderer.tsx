import React from "react";
import { BiodataData, TemplateId } from "@/types/biodata";
import { RoyalMaroonTemplate } from "./designs/RoyalMaroon";
import { RoyalMaroonIllustratedTemplate } from "./designs/RoyalMaroonIllustrated";
import { MaharashtrianHeritageTemplate } from "./designs/MaharashtrianHeritage";
import { ClassicIvoryTemplate } from "./designs/ClassicIvory";
import { RoyalBurgundyTemplate } from "./designs/RoyalBurgundy";
import { TempleHeritageTemplate } from "./designs/TempleHeritage";
import { GoldFiligreeTemplate } from "./designs/GoldFiligree";
import { EmeraldHeritageTemplate } from "./designs/EmeraldHeritage";
import { LotusEleganceTemplate } from "./designs/LotusElegance";
import { ModernBurgundyTemplate } from "./designs/ModernBurgundy";
import { MinimalEditorialTemplate } from "./designs/MinimalEditorial";
import { NavySilverTemplate } from "./designs/NavySilver";
import { ContemporarySandTemplate } from "./designs/ContemporarySand";
import { RoseMinimalTemplate } from "./designs/RoseMinimal";
import { RoseGoldTemplate } from "./designs/RoseGold";
import { ClassicRedTemplate } from "./designs/ClassicRed";

interface BiodataRendererProps {
  data: BiodataData;
  overrideTemplateId?: TemplateId;
  showWatermark?: boolean;
  scale?: number;
  className?: string;
  id?: string;
}

export const BiodataRenderer: React.FC<BiodataRendererProps> = ({
  data,
  overrideTemplateId,
  showWatermark = false,
  scale = 1,
  className = "",
  id = "biodata-document-root",
}) => {
  const activeTemplateId = overrideTemplateId || data.design?.templateId || "royal-maroon";

  const renderTemplate = () => {
    switch (activeTemplateId) {
      case "royal-maroon":
        return <RoyalMaroonTemplate data={data} />;
      case "royal-maroon-illustrated":
        return <RoyalMaroonIllustratedTemplate data={data} />;
      case "maharashtrian-heritage":
        return <MaharashtrianHeritageTemplate data={data} />;
      case "classic-ivory":
        return <ClassicIvoryTemplate data={data} />;
      case "royal-burgundy":
        return <RoyalBurgundyTemplate data={data} />;
      case "temple-heritage":
        return <TempleHeritageTemplate data={data} />;
      case "gold-filigree":
        return <GoldFiligreeTemplate data={data} />;
      case "emerald-heritage":
        return <EmeraldHeritageTemplate data={data} />;
      case "lotus-elegance":
        return <LotusEleganceTemplate data={data} />;
      case "modern-burgundy":
        return <ModernBurgundyTemplate data={data} />;
      case "minimal-editorial":
        return <MinimalEditorialTemplate data={data} />;
      case "navy-silver":
        return <NavySilverTemplate data={data} />;
      case "contemporary-sand":
        return <ContemporarySandTemplate data={data} />;
      case "rose-minimal":
        return <RoseMinimalTemplate data={data} />;
      case "rose-gold":
        return <RoseGoldTemplate data={data} />;
      case "classic-red":
        return <ClassicRedTemplate data={data} />;
      default:
        return <RoyalMaroonTemplate data={data} />;
    }
  };

  return (
    <div
      id={id}
      className={`relative print-page overflow-hidden select-none transition-transform duration-200 origin-top ${className}`}
      style={{
        transform: scale !== 1 ? `scale(${scale})` : undefined,
      }}
    >
      {/* Dynamic Template Content */}
      {renderTemplate()}

      {/* Watermark Overlay (for Preview / Free mode) */}
      {(showWatermark || data.design?.showWatermark) && (
        <div className="preview-watermark pointer-events-none z-20">
          <div className="preview-watermark-text">
            विवाहपत्रिका • PREVIEW
          </div>
        </div>
      )}
    </div>
  );
};
