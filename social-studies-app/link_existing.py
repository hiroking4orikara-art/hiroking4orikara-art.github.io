
import os
import re
import json

def link_existing():
    base_path = r'C:\Users\hirok\.gemini\antigravity\scratch\social-studies-app'
    images_dir = os.path.join(base_path, 'assets', 'images', 'history')
    quiz_data_path = os.path.join(base_path, 'quiz_data.js')
    
    with open(quiz_data_path, 'r', encoding='utf-8') as f:
        content = f.read()

    existing_images = [f for f in os.listdir(images_dir) if f.endswith('.png')]
    unlinked = [img for img in existing_images if img not in content]
    
    # Mapping based on keywords in filename
    mapping = {
        "buddhism": "インドでシャカ（釈迦）が開いた宗教",
        "christianity": "イエスが広め、「神の愛」を説いた宗教",
        "shotoku": "推古天皇の摂政となり",
        "kentoshi": "菅原道真の提案によって停止",
        "yorimichi": "宇治に平等院鳳凰堂を建てた",
        "kana": "漢字を変形させて日本語の音を表せるようにした文字",
        "kokin": "日本最初の勅撰和歌集",
        "kuya": "市聖（いちのひじり）と呼ばれた僧",
        "owada": "平清盛によって整備され、日宋貿易の拠点となった港",
        "sumitomo": "瀬戸内海で海賊を率いて反乱を起こした",
        "hogen": "崇徳上皇と後白河天皇の対立",
        "heiji": "源義朝と平清盛が対立し",
        "handen": "6歳以上の男女に口分田を与え",
        "rice_farming": "大陸から伝わり、日本の生活を大きく変化させた農業技術",
        "nile": "ナイル川の流域で栄えた文明",
        "columbus": "1492年、大西洋を横断してカリブ海の島に到達した",
        "luther": "教会の免罪符販売を批判し",
        "magellan": "世界一周を成し遂げた船団",
        "vasco_da_gama": "アフリカ南端の希望峰を回ってインドに到達",
        "tensho_embassy": "カトリック教会への信仰を示すためにローマに派遣",
        "xavier": "1549年、サビエルが鹿児島に上陸して伝えた",
        "bunroku_keicho": "朝鮮半島へ2度にわたって大軍を送った",
        "kabuki_odori": "出雲の阿国が始めた",
        "momoyama_culture": "秀吉の時代の、豪華で壮大な文化",
        "muromachi_bakufu": "足利尊氏が京都に開いた幕府",
        "oda_nobunaga": "桶狭間の戦いで今川義元を破った",
        "rakuichi_rakuza": "市場の税を免除し、自由な商売を認めた",
        "sen_no_rikyu": "わび茶を完成させた",
        "taiko_kenchi": "全国の土地の広さや質を調べ",
        "toyotomi_hideyoshi": "山崎の戦いで明智光秀を破り",
        "nogyogijutsu": "牛馬耕や草木灰、二毛作などが広まり",
        "rokuhara": "承久の乱の後、朝廷を監視するために",
        "einin": "徳政令（永仁の徳政令）が出された際",
        "godaigo": "鎌倉幕府を倒し、建武の新政を始めた",
        "ikkiuchi": "一騎打ちから集団での戦いへと",
        "shocho": "正長の土一揆が起こり",
        "bunkokuho": "戦国大名が領内を治めるために独自に定めた法律",
        "gakudo_sokai": "都市の子供たちが農村へ避難した",
        "genbaku": "広島と長崎に落とされた人類史上最初の核兵器"
    }

    linked_count = 0
    for img in unlinked:
        for key, marker in mapping.items():
            if key in img:
                # Find the question block
                pattern = r'\{[^{}]*?"q":\s*"[^"]*?' + re.escape(marker) + r'[^"]*?"[^{}]*?\}'
                
                def add_img(match):
                    block = match.group(0)
                    if '"img":' in block:
                        return block
                    nonlocal linked_count
                    linked_count += 1
                    # Insert img. If there's a comment, add comma
                    if '"comment":' in block:
                        return re.sub(r'("comment":\s*"[^"]*")\s*\}', r'\1,\n            "img": "assets/images/history/' + img + r'"\n        }', block)
                    else:
                        return re.sub(r'\}', r',\n            "img": "assets/images/history/' + img + r'"\n        }', block)
                
                content = re.sub(pattern, add_img, content, flags=re.DOTALL)
                break
    
    with open(quiz_data_path, 'w', encoding='utf-8') as f:
        f.write(content)
    
    print(f"Linked {linked_count} images.")

if __name__ == "__main__":
    link_existing()
