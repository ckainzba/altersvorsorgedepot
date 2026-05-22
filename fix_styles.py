import re

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Replace color: white; with color: var(--text-primary); except in <a> tags
def replace_white(match):
    tag = match.group(0)
    if not tag.startswith('<a'):
        return re.sub(r'color:\s*white;?', 'color: var(--text-primary);', tag)
    return tag

content = re.sub(r'<[^>]+>', replace_white, content)

# Wrap emojis
emojis = r'(👶|🎓|🏛️|🏢|📈|📄|📋|🔀|⏸️|🔄|🛡️|⚖️|💡|⬇)'
content = re.sub(emojis, r'<span class="emoji-blue">\1</span>', content)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(content)

