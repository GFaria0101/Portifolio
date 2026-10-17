from pathlib import Path
import shutil
root=Path(__file__).resolve().parents[1]
for name in ('assets','lottie-files'):
    destination=root/name
    if destination.exists(): shutil.rmtree(destination)
for source in (root/'dist').iterdir():
    destination=root/source.name
    if source.is_dir(): shutil.copytree(source,destination,dirs_exist_ok=True)
    else: shutil.copy2(source,destination)
(root/'.nojekyll').touch()
